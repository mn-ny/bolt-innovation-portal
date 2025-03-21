
import { Calendar, MapPin, Trophy, Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function EventDetailsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-hackathon-dark/0 via-hackathon-blue/5 to-hackathon-dark/0 z-0" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Event Details
          </h2>
          <p className="text-lg text-white/70">
            Join us for the world's largest hackathon and compete for incredible prizes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Location */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 mr-4">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Location</h3>
            </div>
            <p className="text-white/80 mb-4">Virtual</p>
            <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
              Worldwide Access
            </Badge>
          </div>
          
          {/* Date */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 mr-4">
                <Calendar className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Date</h3>
            </div>
            <p className="text-white/80 mb-4">TBD</p>
            <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
              48-Hour Event
            </Badge>
          </div>
          
          {/* Prizes */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 mr-4">
                <Trophy className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Prizes</h3>
            </div>
            <p className="text-white/80 mb-4">$1M+ Prize Pool</p>
            <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
              Multiple Categories
            </Badge>
          </div>
          
          {/* Theme */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 mr-4">
                <Sparkle className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Theme</h3>
            </div>
            <p className="text-white/80 mb-4">AI for Good</p>
            <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
              Sustainable Solutions
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
