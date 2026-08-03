"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type ChangeEvent, type FocusEvent } from "react";
import { bankLogoPath } from "@/lib/bank-data";
import {
  calculateDeposit,
  calculateLoan,
  formatCurrency,
  formatPercent,
  getHousingLimit,
  getPersonalMaxMonths,
  getVehicleLimit,
  type EnergyClass,
  type FinanceTab,
  type VehicleType,
} from "@/lib/finance-calculations";
import { financialOffers } from "@/lib/financial-offers";

const TAB_META: { id: FinanceTab; label: string; short: string; icon: string }[] = [
  { id: "personal", label: "İhtiyaç Kredisi", short: "İhtiyaç", icon: "₺" },
  { id: "housing", label: "Konut Kredisi", short: "Konut", icon: "⌂" },
  { id: "vehicle", label: "Taşıt Kredisi", short: "Taşıt", icon: "◈" },
  { id: "deposit", label: "Mevduat Getirisi", short: "Mevduat", icon: "%" },
];

const trIntegerFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 0,
});

type NumericInputFormat = "currency" | "integer" | "decimal";

function stepDecimals(step: number) {
  const value = String(step);
  return value.includes(".") ? value.split(".")[1].length : 0;
}

function formatNumericDraft(value: number, format: NumericInputFormat, step: number, allowEmpty = true) {
  if (!Number.isFinite(value) || (allowEmpty && value === 0)) return "";

  if (format === "currency") {
    return trIntegerFormatter.format(Math.max(0, Math.round(value)));
  }

  if (format === "integer") {
    return String(Math.max(0, Math.round(value)));
  }

  return new Intl.NumberFormat("tr-TR", {
    useGrouping: false,
    minimumFractionDigits: 0,
    maximumFractionDigits: Math.max(2, stepDecimals(step)),
  }).format(Math.max(0, value));
}

function cleanNumericDraft(rawValue: string, format: NumericInputFormat, step: number) {
  if (format === "currency" || format === "integer") {
    const digits = rawValue.replace(/\D/g, "").replace(/^0+(?=\d)/, "");
    if (!digits) return { draft: "", parsed: null as number | null };

    const parsed = Number(digits);
    return {
      draft: format === "currency" ? trIntegerFormatter.format(parsed) : digits,
      parsed,
    };
  }

  const decimalLimit = Math.max(2, stepDecimals(step));
  const normalized = rawValue.replace(/,/g, ".").replace(/[^0-9.]/g, "");
  const [wholeRaw = "", ...fractionParts] = normalized.split(".");
  const whole = wholeRaw.replace(/^0+(?=\d)/, "") || (normalized.startsWith(".") ? "0" : wholeRaw);
  const fraction = fractionParts.join("").slice(0, decimalLimit);
  const hasSeparator = normalized.includes(".");
  const draft = `${whole}${hasSeparator ? "," : ""}${fraction}`;
  const parsed = draft && draft !== "," ? Number(draft.replace(",", ".")) : null;

  return {
    draft,
    parsed: Number.isFinite(parsed) ? parsed : null,
  };
}

function NumericInput({
  id,
  label,
  value,
  onChange,
  suffix,
  min = 0,
  max,
  step = 1,
  hint,
  format = "integer",
  allowEmpty = true,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix: string;
  min?: number;
  max?: number;
  step?: number;
  hint?: string;
  format?: NumericInputFormat;
  allowEmpty?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(() => formatNumericDraft(value, format, step, allowEmpty));

  useEffect(() => {
    if (!editing) setDraft(formatNumericDraft(value, format, step, allowEmpty));
  }, [allowEmpty, editing, format, step, value]);

  const clampValue = (nextValue: number) => {
    let next = Math.max(min, nextValue);
    if (typeof max === "number") next = Math.min(max, next);
    return format === "decimal" ? next : Math.round(next);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const cleaned = cleanNumericDraft(event.target.value, format, step);
    setDraft(cleaned.draft);

    // Alan tamamen silindiğinde parent değerini de sıfırla; eski rakam geri gelmesin.
    if (cleaned.parsed === null) {
      onChange(0);
      return;
    }
    onChange(cleaned.parsed);
  };

  const handleFocus = () => {
    setEditing(true);
    window.requestAnimationFrame(() => inputRef.current?.select());
  };

  const handleBlur = (_event: FocusEvent<HTMLInputElement>) => {
    setEditing(false);
    const cleaned = cleanNumericDraft(draft, format, step);
    if (cleaned.parsed === null || (allowEmpty && cleaned.parsed === 0)) {
      onChange(0);
      setDraft("");
      return;
    }
    const next = clampValue(cleaned.parsed);
    onChange(next);
    setDraft(formatNumericDraft(next, format, step, allowEmpty));
  };

  const handleClear = () => {
    setEditing(true);
    setDraft("");
    onChange(0);
    window.requestAnimationFrame(() => inputRef.current?.focus());
  };

  return (
    <div className="finance-field">
      <label className="finance-field-title" htmlFor={id}>{label}</label>
      <div className="finance-input-wrap">
        <input
          ref={inputRef}
          id={id}
          type="text"
          inputMode={format === "decimal" ? "decimal" : "numeric"}
          autoComplete="off"
          enterKeyHint="done"
          value={draft}
          placeholder="0"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-label={`${label} (${suffix})`}
        />
        {draft ? (
          <button
            type="button"
            className="finance-input-clear"
            aria-label={`${label} alanını temizle`}
            onMouseDown={(event) => event.preventDefault()}
            onClick={handleClear}
          >
            ×
          </button>
        ) : null}
        <b>{suffix}</b>
      </div>
      {hint ? <small>{hint}</small> : null}
    </div>
  );
}

export default function FinanceCalculator({ initialTab = "personal" }: { initialTab?: FinanceTab }) {
  const [tab, setTab] = useState<FinanceTab>(initialTab);
  const [principal, setPrincipal] = useState(100_000);
  const [months, setMonths] = useState(12);
  const [monthlyRate, setMonthlyRate] = useState(3.29);
  const [allocationFee, setAllocationFee] = useState(575);
  const [propertyValue, setPropertyValue] = useState(3_000_000);
  const [energyClass, setEnergyClass] = useState<EnergyClass>("other");
  const [ownsAnotherHome, setOwnsAnotherHome] = useState(false);
  const [vehiclePrice, setVehiclePrice] = useState(1_000_000);
  const [vehicleType, setVehicleType] = useState<VehicleType>("standard");
  const [depositPrincipal, setDepositPrincipal] = useState(250_000);
  const [depositRate, setDepositRate] = useState(45);
  const [depositDays, setDepositDays] = useState(32);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const personalMaxMonths = getPersonalMaxMonths(principal);
  const housingLimit = useMemo(
    () => getHousingLimit(propertyValue, energyClass, ownsAnotherHome),
    [propertyValue, energyClass, ownsAnotherHome],
  );
  const vehicleLimit = useMemo(
    () => getVehicleLimit(vehiclePrice, vehicleType),
    [vehiclePrice, vehicleType],
  );

  useEffect(() => {
    if (tab === "personal" && months > personalMaxMonths) setMonths(personalMaxMonths);
    if (tab === "vehicle" && vehicleLimit.eligible && months > vehicleLimit.maxMonths) {
      setMonths(vehicleLimit.maxMonths);
    }
  }, [tab, months, personalMaxMonths, vehicleLimit]);

  useEffect(() => {
    setScheduleOpen(false);
    if (tab === "personal") {
      setPrincipal(100_000);
      setMonths(12);
      setMonthlyRate(3.29);
      setAllocationFee(575);
    } else if (tab === "housing") {
      setPrincipal(Math.min(2_000_000, housingLimit.maxLoan));
      setMonths(120);
      setMonthlyRate(3.10);
      setAllocationFee(0);
    } else if (tab === "vehicle") {
      setPrincipal(Math.min(500_000, vehicleLimit.maxLoan || 500_000));
      setMonths(Math.min(24, vehicleLimit.maxMonths || 12));
      setMonthlyRate(3.59);
      setAllocationFee(2500);
    }
  // Only reset values when the selected product changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const maxMonths = tab === "personal" ? personalMaxMonths : tab === "vehicle" ? Math.max(1, vehicleLimit.maxMonths) : 240;
  const maxPrincipal = tab === "housing" ? housingLimit.maxLoan : tab === "vehicle" ? vehicleLimit.maxLoan : 10_000_000;
  const constrainedPrincipal = Math.max(1, Math.min(principal, Math.max(1, maxPrincipal)));
  const constrainedMonths = Math.max(1, Math.min(months, maxMonths));
  const bsmvRate = tab === "personal" || tab === "vehicle" || (tab === "housing" && ownsAnotherHome) ? 0.15 : 0;
  const kkdfRate = tab === "personal" || tab === "vehicle" ? 0.15 : 0;
  const taxesEnabled = bsmvRate > 0 || kkdfRate > 0;
  const taxExplanation = tab === "housing"
    ? ownsAnotherHome
      ? " · Başka konut sahipliğinde faiz üzerinden %15 BSMV, KKDF muafiyeti varsayımı"
      : " · İlk konut ediniminde KKDF ve BSMV istisnası varsayımı"
    : " · Faiz üzerinden %15 BSMV + %15 KKDF varsayımı";

  const loanResult = useMemo(
    () =>
      calculateLoan({
        principal: constrainedPrincipal,
        months: constrainedMonths,
        monthlyRatePercent: monthlyRate,
        bsmvRate,
        kkdfRate,
        allocationFee,
      }),
    [allocationFee, bsmvRate, constrainedMonths, constrainedPrincipal, kkdfRate, monthlyRate],
  );

  const depositResult = useMemo(
    () => calculateDeposit({ principal: depositPrincipal, annualRatePercent: depositRate, days: depositDays }),
    [depositDays, depositPrincipal, depositRate],
  );

  const activeOffers = useMemo(
    () => financialOffers.filter((offer) => offer.tab === tab).sort((a, b) => tab === "deposit" ? b.rate - a.rate : a.rate - b.rate),
    [tab],
  );

  const productInvalid = tab === "vehicle" && vehiclePrice > 0 && !vehicleLimit.eligible;
  const productContextReady = tab === "housing" ? propertyValue > 0 : tab === "vehicle" ? vehiclePrice > 0 : true;
  const loanReady = tab !== "deposit" && productContextReady && principal > 0 && months > 0 && monthlyRate >= 0 && !productInvalid;
  const depositReady = tab === "deposit" && depositPrincipal > 0 && depositDays > 0 && depositRate >= 0;

  return (
    <div className="finance-center">
      <div className="finance-tabs" role="tablist" aria-label="Finans hesaplama türleri">
        {TAB_META.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            className={tab === item.id ? "active" : ""}
            onClick={() => setTab(item.id)}
          >
            <span aria-hidden="true">{item.icon}</span>
            <b>{item.label}</b>
            <em>{item.short}</em>
          </button>
        ))}
      </div>

      <div className="finance-workspace">
        <section className="finance-form-card">
          <div className="finance-card-heading">
            <span className="eyebrow">HESAPLAMA ARACI</span>
            <h2>{TAB_META.find((item) => item.id === tab)?.label}</h2>
            <p>Değerleri değiştir; sonuçlar anında yeniden hesaplansın.</p>
          </div>

          {tab === "housing" ? (
            <div className="finance-fields">
              <NumericInput id="property-value" label="Konut değeri" value={propertyValue} onChange={setPropertyValue} suffix="TL" step={10_000} min={100_000} format="currency" />
              <label className="finance-field" htmlFor="energy-class">
                <span>Enerji sınıfı</span>
                <select id="energy-class" value={energyClass} onChange={(event: ChangeEvent<HTMLSelectElement>) => setEnergyClass(event.target.value as EnergyClass)}>
                  <option value="ab">A veya B</option>
                  <option value="c">C</option>
                  <option value="other">Diğer / bilinmiyor</option>
                </select>
              </label>
              <label className="finance-toggle">
                <input type="checkbox" checked={ownsAnotherHome} onChange={(event: ChangeEvent<HTMLInputElement>) => setOwnsAnotherHome(event.target.checked)} />
                <span>Benim/eşimin/18 yaş altı çocuğumun başka konutu var</span>
              </label>
              <div className="finance-limit-card">
                <span>Tahmini azami kredi</span>
                <strong>{propertyValue > 0 ? formatCurrency(housingLimit.maxLoan) : "—"}</strong>
                <small>{propertyValue > 0 ? `Azami oran ${formatPercent(housingLimit.maxRatio * 100, 0)} · Asgari peşinat ${formatCurrency(housingLimit.minDownPayment)}` : "Konut değerini girin."}</small>
              </div>
            </div>
          ) : null}

          {tab === "vehicle" ? (
            <div className="finance-fields">
              <NumericInput id="vehicle-price" label="Araç fatura/değer tutarı" value={vehiclePrice} onChange={setVehiclePrice} suffix="TL" step={10_000} min={50_000} format="currency" />
              <label className="finance-field" htmlFor="vehicle-type">
                <span>Araç türü</span>
                <select id="vehicle-type" value={vehicleType} onChange={(event: ChangeEvent<HTMLSelectElement>) => setVehicleType(event.target.value as VehicleType)}>
                  <option value="standard">Standart araç</option>
                  <option value="domestic-electric">Türkiye üretimi yalnız elektrikli</option>
                </select>
              </label>
              <div className={`finance-limit-card${vehicleLimit.eligible ? "" : " warning"}`}>
                <span>{vehicleLimit.eligible ? "Tahmini azami taşıt kredisi" : "Bu değer aralığında sınır aşılıyor"}</span>
                <strong>{vehiclePrice > 0 ? formatCurrency(vehicleLimit.maxLoan) : "—"}</strong>
                <small>{vehiclePrice <= 0 ? "Araç değerini girin." : vehicleLimit.eligible ? `Azami oran ${formatPercent(vehicleLimit.maxRatio * 100, 0)} · Azami vade ${vehicleLimit.maxMonths} ay` : "Seçilen araç türü için tanımlı üst sınırın üzerinde."}</small>
              </div>
            </div>
          ) : null}

          {tab !== "deposit" ? (
            <div className="finance-fields finance-main-fields">
              <NumericInput
                id="loan-principal"
                label="Kredi tutarı"
                value={principal}
                onChange={setPrincipal}
                suffix="TL"
                min={1_000}
                max={Math.max(1_000, maxPrincipal)}
                step={1_000}
                format="currency"
                hint={tab === "personal" ? `Bu tutarda azami vade ${personalMaxMonths} ay.` : undefined}
              />
              <NumericInput id="loan-months" label="Vade" value={months} onChange={(value) => setMonths(Math.round(value))} suffix="Ay" min={1} max={maxMonths} format="integer" />
              <NumericInput id="monthly-rate" label="Aylık faiz/kâr payı" value={monthlyRate} onChange={setMonthlyRate} suffix="%" min={0} max={100} step={0.01} format="decimal" />
              <NumericInput id="allocation-fee" label="Tahsis ve diğer peşin masraf" value={allocationFee} onChange={setAllocationFee} suffix="TL" min={0} step={1} format="currency" />
            </div>
          ) : (
            <div className="finance-fields finance-main-fields">
              <NumericInput id="deposit-principal" label="Yatırılacak tutar" value={depositPrincipal} onChange={setDepositPrincipal} suffix="TL" min={1_000} step={1_000} format="currency" />
              <NumericInput id="deposit-rate" label="Yıllık brüt faiz" value={depositRate} onChange={setDepositRate} suffix="%" min={0} max={100} step={0.01} format="decimal" />
              <NumericInput id="deposit-days" label="Vade" value={depositDays} onChange={(value) => setDepositDays(Math.round(value))} suffix="Gün" min={1} max={3650} format="integer" />
              <div className="finance-stopaj-note">
                <span>Uygulanan stopaj</span>
                <strong>{depositReady ? formatPercent(depositResult.withholdingRate * 100, 1) : "—"}</strong>
                <small>Vade gününe göre otomatik seçildi.</small>
              </div>
            </div>
          )}
        </section>

        <section className="finance-result-card" aria-live="polite">
          <div className="finance-result-top">
            <span>{tab === "deposit" ? "Vade sonu toplam" : "Tahmini aylık taksit"}</span>
            <strong>{tab === "deposit" ? (depositReady ? formatCurrency(depositResult.maturityTotal) : "—") : loanReady ? formatCurrency(loanResult.monthlyPayment) : "—"}</strong>
            <small>{tab === "deposit" ? (depositReady ? `${depositDays} gün sonunda net kazanç` : "Hesaplamak için tutar ve vade girin") : loanReady ? `${constrainedMonths} eşit taksit varsayımı` : "Hesaplamak için kredi tutarı ve vade girin"}</small>
          </div>

          {tab === "deposit" ? (
            <>
              <div className="finance-result-grid">
                <div><span>Brüt kazanç</span><b>{depositReady ? formatCurrency(depositResult.grossInterest) : "—"}</b></div>
                <div><span>Vergi kesintisi</span><b>{depositReady ? `-${formatCurrency(depositResult.withholding)}` : "—"}</b></div>
                <div className="highlight"><span>Net kazanç</span><b>{depositReady ? formatCurrency(depositResult.netInterest) : "—"}</b></div>
                <div><span>Günlük net ortalama</span><b>{depositReady ? formatCurrency(depositResult.dailyNetAverage) : "—"}</b></div>
              </div>
              <div className="finance-stopaj-legal-note">
                <strong>Stopaj varsayımı</strong>
                <p>
                  TL mevduatta 6 aya kadar %17,5; 1 yıla kadar %15; 1 yıldan uzun vadede %10 oranı kullanılır.
                  Hesabın açılış veya yenileme tarihi ile mevzuat değişiklikleri sonucu etkileyebilir.
                </p>
                <a
                  href="https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Ffileadmin%2Fbeyannamerehberi%2F2026%2F2026_Gecici67.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GİB vergi rehberi · Son kontrol: 2 Ağustos 2026 ↗
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="finance-result-grid">
                <div><span>Toplam taksit</span><b>{loanReady ? formatCurrency(loanResult.totalInstallments) : "—"}</b></div>
                <div><span>Toplam faiz/kâr payı</span><b>{loanReady ? formatCurrency(loanResult.totalInterest) : "—"}</b></div>
                <div><span>Vergiler</span><b>{loanReady ? formatCurrency(loanResult.totalTaxes) : "—"}</b></div>
                <div className="highlight"><span>Masraflı toplam ödeme</span><b>{loanReady ? formatCurrency(loanResult.totalCost) : "—"}</b></div>
              </div>
              <div className="finance-result-foot">
                <span>Yaklaşık yıllık bileşik oran: <strong>{loanReady ? formatPercent(loanResult.effectiveAnnualRate) : "—"}</strong>{taxExplanation}</span>
                <button type="button" disabled={!loanReady} onClick={() => setScheduleOpen((open) => !open)}>
                  {scheduleOpen ? "Ödeme planını kapat" : "Ödeme planını göster"}
                </button>
              </div>
            </>
          )}
        </section>
      </div>

      {tab !== "deposit" && scheduleOpen && loanReady ? (
        <section className="finance-schedule-card">
          <div className="finance-section-heading">
            <div><span className="eyebrow">AYLIK DÖKÜM</span><h2>Ödeme planı</h2></div>
            <span>{loanResult.schedule.length} taksit</span>
          </div>
          <div className="finance-table-wrap">
            <table>
              <thead><tr><th>Ay</th><th>Taksit</th><th>Anapara</th><th>Faiz</th>{taxesEnabled ? <><th>BSMV</th><th>KKDF</th></> : null}<th>Kalan borç</th></tr></thead>
              <tbody>
                {loanResult.schedule.map((row) => (
                  <tr key={row.month}><td>{row.month}</td><td>{formatCurrency(row.payment)}</td><td>{formatCurrency(row.principal)}</td><td>{formatCurrency(row.interest)}</td>{taxesEnabled ? <><td>{formatCurrency(row.bsmv)}</td><td>{formatCurrency(row.kkdf)}</td></> : null}<td>{formatCurrency(row.remaining)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <section className="finance-offers-section">
        <div className="finance-section-heading">
          <div>
            <span className="eyebrow">RESMÎ KAYNAKLI TEKLİFLER</span>
            <h2>{tab === "deposit" ? "Yayınlanan mevduat oranları" : "Yayınlanan kredi oranları"}</h2>
          </div>
          <span>Son kontrol: 2 Ağustos 2026</span>
        </div>
        {activeOffers.length ? (
          <div className="finance-offer-grid">
            {activeOffers.map((offer, index) => {
              const comparedPrincipal = offer.tab === "deposit" ? depositPrincipal : constrainedPrincipal;
              const comparedMonths = constrainedMonths;
              const principalMatches =
                (offer.minPrincipal === undefined || comparedPrincipal >= offer.minPrincipal) &&
                (offer.maxPrincipal === undefined || comparedPrincipal <= offer.maxPrincipal);
              const monthsMatch =
                offer.tab === "deposit" ||
                ((offer.minMonths === undefined || comparedMonths >= offer.minMonths) &&
                  (offer.maxMonths === undefined || comparedMonths <= offer.maxMonths));
              const offerMatches = principalMatches && monthsMatch && (offer.tab === "deposit" ? depositReady : loanReady);
              const offerLoan = offer.tab !== "deposit" && offerMatches
                ? calculateLoan({
                    principal: constrainedPrincipal,
                    months: constrainedMonths,
                    monthlyRatePercent: offer.rate,
                    bsmvRate: offer.tab === "housing" ? (ownsAnotherHome ? 0.15 : 0) : 0.15,
                    kkdfRate: offer.tab === "housing" ? 0 : 0.15,
                  })
                : null;
              const interestBearingPrincipal = depositPrincipal * (offer.interestBearingRatio ?? 1);
              const offerDeposit = offer.tab === "deposit" && offerMatches
                ? calculateDeposit({ principal: interestBearingPrincipal, annualRatePercent: offer.rate, days: depositDays })
                : null;
              return (
                <article className="finance-offer-card" key={offer.id}>
                  {index === 0 ? <span className="finance-offer-badge">{tab === "deposit" ? "Listelenen en yüksek oran" : "Listelenen en düşük oran"}</span> : null}
                  <div className="finance-offer-bank">
                    <div className="finance-offer-logo"><Image src={bankLogoPath(offer.bankId)} alt={`${offer.bankName} logosu`} fill sizes="48px" /></div>
                    <div><strong>{offer.bankName}</strong><small>{offer.productName}</small></div>
                  </div>
                  <div className="finance-offer-rate"><span>{offer.rateLabel}</span><strong>%{offer.rate.toLocaleString("tr-TR", { minimumFractionDigits: offer.rate % 1 ? 2 : 0 })}</strong></div>
                  <div className={`finance-offer-output${offerMatches ? "" : " mismatch"}`}>
                    <span>
                      {!offerMatches
                        ? "Girilen tutar veya vade bu yayınlanan oranın sınırında değil"
                        : offer.tab === "deposit"
                          ? offer.interestBearingRatio
                            ? "Faizlenen bakiye üzerinden tahmini net kazanç"
                            : "Tam bakiyeye uygulanırsa tahmini net kazanç"
                          : "Bu oranla tahmini aylık taksit"}
                    </span>
                    <b>{offerDeposit ? formatCurrency(offerDeposit.netInterest) : offerLoan ? formatCurrency(offerLoan.monthlyPayment) : "Koşulları inceleyin"}</b>
                  </div>
                  <p>{offer.termText}</p>
                  <small className="finance-offer-condition">{offer.conditions}</small>
                  <a href={offer.sourceUrl} target="_blank" rel="noopener noreferrer">Resmî kaynağı aç ↗</a>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="finance-empty-offers">
            <strong>Bu ürün için doğrulanmış banka teklifi henüz eklenmedi.</strong>
            <p>Uydurma oran göstermiyoruz. Resmî banka kaynağı ve kontrol tarihi doğrulanınca burada yayınlanacak.</p>
          </div>
        )}
      </section>

      <div className="finance-disclaimer">
        <strong>Önemli bilgilendirme</strong>
        <p>Hesaplamalar yaklaşık sonuç verir; banka tahsis ücreti, sigorta, ekspertiz, rehin/ipotek ve müşteriye özel fiyatlama toplam maliyeti değiştirebilir. ParaKarne banka veya kredi veren kuruluş değildir. Başvuru öncesinde bankanın resmî ödeme planını ve sözleşmesini kontrol edin.</p>
      </div>
    </div>
  );
}
