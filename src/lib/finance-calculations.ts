export type FinanceTab = "personal" | "housing" | "vehicle" | "deposit";
export type EnergyClass = "ab" | "c" | "other";
export type VehicleType = "standard" | "domestic-electric";

export type PaymentRow = {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  bsmv: number;
  kkdf: number;
  remaining: number;
};

export type LoanResult = {
  monthlyPayment: number;
  totalInstallments: number;
  totalInterest: number;
  totalTaxes: number;
  allocationFee: number;
  totalCost: number;
  effectiveAnnualRate: number;
  schedule: PaymentRow[];
};

export type HousingLimit = {
  maxRatio: number;
  maxLoan: number;
  minDownPayment: number;
};

export type VehicleLimit = {
  maxRatio: number;
  maxLoan: number;
  maxMonths: number;
  eligible: boolean;
};

export type DepositResult = {
  grossInterest: number;
  withholdingRate: number;
  withholding: number;
  netInterest: number;
  maturityTotal: number;
  dailyNetAverage: number;
};

const clampNumber = (value: number, min: number, max: number) =>
  Math.min(Math.max(Number.isFinite(value) ? value : min, min), max);

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

export function formatPercent(value: number, digits = 2): string {
  return `%${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0)}`;
}

export function getPersonalMaxMonths(principal: number): number {
  if (principal <= 125_000) return 36;
  if (principal <= 250_000) return 24;
  return 12;
}

export function calculateLoan({
  principal,
  months,
  monthlyRatePercent,
  bsmvRate = 0,
  kkdfRate = 0,
  allocationFee = 0,
}: {
  principal: number;
  months: number;
  monthlyRatePercent: number;
  bsmvRate?: number;
  kkdfRate?: number;
  allocationFee?: number;
}): LoanResult {
  const safePrincipal = clampNumber(principal, 1, 1_000_000_000);
  const safeMonths = Math.round(clampNumber(months, 1, 360));
  const nominalRate = clampNumber(monthlyRatePercent, 0, 100) / 100;
  const safeBsmv = clampNumber(bsmvRate, 0, 1);
  const safeKkdf = clampNumber(kkdfRate, 0, 1);
  const taxMultiplier = 1 + safeBsmv + safeKkdf;
  const effectiveMonthlyRate = nominalRate * taxMultiplier;

  const monthlyPayment =
    effectiveMonthlyRate === 0
      ? safePrincipal / safeMonths
      : (safePrincipal * effectiveMonthlyRate * (1 + effectiveMonthlyRate) ** safeMonths) /
        ((1 + effectiveMonthlyRate) ** safeMonths - 1);

  let remaining = safePrincipal;
  let totalInterest = 0;
  let totalTaxes = 0;
  const schedule: PaymentRow[] = [];

  for (let month = 1; month <= safeMonths; month += 1) {
    const interest = remaining * nominalRate;
    const bsmv = interest * safeBsmv;
    const kkdf = interest * safeKkdf;
    const isLast = month === safeMonths;
    const principalPayment = isLast
      ? remaining
      : Math.max(0, Math.min(remaining, monthlyPayment - interest - bsmv - kkdf));
    const actualPayment = principalPayment + interest + bsmv + kkdf;
    remaining = Math.max(0, remaining - principalPayment);
    totalInterest += interest;
    totalTaxes += bsmv + kkdf;

    schedule.push({
      month,
      payment: actualPayment,
      principal: principalPayment,
      interest,
      bsmv,
      kkdf,
      remaining,
    });
  }

  const totalInstallments = schedule.reduce((sum, row) => sum + row.payment, 0);
  const safeFee = clampNumber(allocationFee, 0, safePrincipal);

  return {
    monthlyPayment: schedule[0]?.payment ?? 0,
    totalInstallments,
    totalInterest,
    totalTaxes,
    allocationFee: safeFee,
    totalCost: totalInstallments + safeFee,
    effectiveAnnualRate: ((1 + effectiveMonthlyRate) ** 12 - 1) * 100,
    schedule,
  };
}

function housingBaseRatio(value: number, energyClass: EnergyClass): number {
  const tier = value <= 5_000_000 ? 0 : value <= 7_000_000 ? 1 : value <= 10_000_000 ? 2 : value <= 20_000_000 ? 3 : 4;
  const ratios: Record<EnergyClass, number[]> = {
    ab: [0.9, 0.8, 0.7, 0.5, 0.4],
    c: [0.8, 0.7, 0.6, 0.4, 0.3],
    other: [0.7, 0.6, 0.5, 0.3, 0.2],
  };
  return ratios[energyClass][tier];
}

export function getHousingLimit(
  propertyValue: number,
  energyClass: EnergyClass,
  ownsAnotherHome: boolean,
): HousingLimit {
  const safeValue = clampNumber(propertyValue, 1, 1_000_000_000);
  const baseRatio = housingBaseRatio(safeValue, energyClass);
  const maxRatio = ownsAnotherHome ? baseRatio * 0.25 : baseRatio;
  const maxLoan = safeValue * maxRatio;
  return {
    maxRatio,
    maxLoan,
    minDownPayment: safeValue - maxLoan,
  };
}

export function getVehicleLimit(vehiclePrice: number, vehicleType: VehicleType): VehicleLimit {
  const price = clampNumber(vehiclePrice, 1, 1_000_000_000);

  if (vehicleType === "domestic-electric") {
    if (price <= 2_500_000) return { maxRatio: 0.7, maxLoan: price * 0.7, maxMonths: 48, eligible: true };
    if (price <= 5_000_000) return { maxRatio: 0.5, maxLoan: price * 0.5, maxMonths: 36, eligible: true };
    if (price <= 6_500_000) return { maxRatio: 0.3, maxLoan: price * 0.3, maxMonths: 24, eligible: true };
    if (price <= 7_500_000) return { maxRatio: 0.2, maxLoan: price * 0.2, maxMonths: 12, eligible: true };
    return { maxRatio: 0, maxLoan: 0, maxMonths: 0, eligible: false };
  }

  if (price <= 400_000) return { maxRatio: 0.7, maxLoan: price * 0.7, maxMonths: 48, eligible: true };
  if (price <= 800_000) return { maxRatio: 0.5, maxLoan: price * 0.5, maxMonths: 36, eligible: true };
  if (price <= 1_200_000) return { maxRatio: 0.3, maxLoan: price * 0.3, maxMonths: 24, eligible: true };
  if (price <= 2_000_000) return { maxRatio: 0.2, maxLoan: price * 0.2, maxMonths: 12, eligible: true };
  return { maxRatio: 0, maxLoan: 0, maxMonths: 0, eligible: false };
}

export function getDepositWithholdingRate(days: number): number {
  const safeDays = clampNumber(days, 1, 3650);
  if (safeDays <= 183) return 0.175;
  if (safeDays <= 365) return 0.15;
  return 0.1;
}

export function calculateDeposit({
  principal,
  annualRatePercent,
  days,
}: {
  principal: number;
  annualRatePercent: number;
  days: number;
}): DepositResult {
  const safePrincipal = clampNumber(principal, 1, 1_000_000_000);
  const safeRate = clampNumber(annualRatePercent, 0, 100) / 100;
  const safeDays = Math.round(clampNumber(days, 1, 3650));
  const grossInterest = safePrincipal * safeRate * (safeDays / 365);
  const withholdingRate = getDepositWithholdingRate(safeDays);
  const withholding = grossInterest * withholdingRate;
  const netInterest = grossInterest - withholding;

  return {
    grossInterest,
    withholdingRate,
    withholding,
    netInterest,
    maturityTotal: safePrincipal + netInterest,
    dailyNetAverage: netInterest / safeDays,
  };
}
