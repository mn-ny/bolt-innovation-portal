
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="hackathon-section min-h-screen relative flex flex-col items-center justify-center pt-20 pb-20">
      {/* Repositioned spline container */}
      <div className="spline-container absolute inset-0 top-auto h-[70vh] bottom-0">
        {!isMobile && (
          <Spline
            scene="https://prod.spline.design/ITO6OJ2xaZTLiTae/scene.splinecode"
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </div>
      
      {/* Enhanced gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] z-[1] bg-gradient-to-t from-hackathon-dark via-hackathon-dark/95 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 animate-fade-up mt-[-10vh]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="block">The World's</span>
          <span className="block italic font-normal">Largest</span>
          <span className="block">Hackathon</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Transform your operations with AI-driven solutions that cut costs, save time, and boost efficiency all in record time.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-hackathon-blue-dark text-white hover:bg-hackathon-blue-dark/80 px-8 py-6 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20">
            Register Now
          </Button>
          <Button variant="outline" size="lg" className="glassmorphism text-white hover:bg-white/20 px-8 py-6 rounded-full transition-all duration-300">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500 inline-block"></span>
              Become a Sponsor
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
