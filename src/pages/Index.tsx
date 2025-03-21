
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-hackathon-dark overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <SponsorsSection />
      </main>
    </div>
  );
}
