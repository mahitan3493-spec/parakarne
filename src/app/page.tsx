import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ledger from "@/components/Ledger";
import BankGrid from "@/components/BankGrid";
import Reviews from "@/components/Reviews";
import HowItWorks from "@/components/HowItWorks";
import CtaBand from "@/components/CtaBand";
import Legal from "@/components/Legal";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import BankDetailModal from "@/components/BankDetailModal";
import ProfileModal from "@/components/ProfileModal";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Ledger />
      <BankGrid />
      <Reviews />
      <HowItWorks />
      <CtaBand />
      <Legal />
      <Footer />
      <AuthModal />
      <BankDetailModal />
      <ProfileModal />
    </>
  );
}
