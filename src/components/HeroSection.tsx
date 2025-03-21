
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[100px] z-10 bg-gradient-to-b from-hackathon-dark to-transparent" />
      
      {/* Full-height Spline container */}
      <div className="absolute inset-0 w-full h-full">
        {!isMobile && (
          <Spline
            scene="https://prod.spline.design/ITO6OJ2xaZTLiTae/scene.splinecode"
            onLoad={() => setIsLoaded(true)}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] z-10 bg-gradient-to-t from-hackathon-dark to-transparent" />
      
      {/* Content container with improved vertical positioning */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6 py-16 mt-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
          <span className="block font-display">The World's</span>
          <span className="block italic font-normal font-display text-white/90">Largest</span>
          <span className="block font-display">Hackathon</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Transform your operations with AI-driven solutions that cut costs, save time, and boost efficiency all in record time.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="bg-white text-hackathon-dark hover:bg-white/90 px-10 py-7 rounded-full transition-all duration-300 text-base font-medium shadow-xl shadow-blue-500/20">
            Register Now
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-10 py-7 rounded-full transition-all duration-300 text-base font-medium">
            <span className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-blue-500 inline-block animate-pulse-subtle"></span>
              Become a Sponsor
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
