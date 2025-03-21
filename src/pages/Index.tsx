
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import PrizesSection from "@/components/PrizesSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-hackathon-dark overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <EventDetailsSection />
        <PrizesSection />
        <SponsorsSection />
      </main>
    </div>
  );
}
