import type { Metadata } from "next";
import AdminModeration from "@/components/AdminModeration";

export const metadata: Metadata = {
  title: "Moderasyon Paneli",
  description: "ParaKarne dahili moderasyon paneli.",
  alternates: { canonical: "/admin" },
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminModeration />;
}
