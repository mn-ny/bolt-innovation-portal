
import { Trophy, Award, Gift, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PrizeProps {
  title: string;
  amount: string;
  description: string;
  icon: React.ReactNode;
}

const prizes: PrizeProps[] = [
  {
    title: "Grand Prize",
    amount: "$500,000",
    description: "For the most innovative solution with the highest impact potential",
    icon: <Trophy className="w-8 h-8 text-yellow-400" />
  },
  {
    title: "Runner Up",
    amount: "$250,000",
    description: "For the second-place team with exceptional technical implementation",
    icon: <Award className="w-8 h-8 text-blue-400" />
  },
  {
    title: "People's Choice",
    amount: "$100,000",
    description: "Voted by the community for the most popular project",
    icon: <Gift className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Technical Excellence",
    amount: "$150,000",
    description: "For the most technically impressive implementation",
    icon: <Zap className="w-8 h-8 text-green-400" />
  }
];

export default function PrizesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-hackathon-dark/0 via-hackathon-blue/5 to-hackathon-dark/0 z-0" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            $1M+ in Prizes
          </h2>
          <p className="text-lg text-white/70">
            Compete for substantial prizes across multiple categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prizes.map((prize, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-white font-display">{prize.title}</CardTitle>
                  {prize.icon}
                </div>
                <CardDescription className="text-white/70 text-xl font-semibold">
                  {prize.amount}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{prize.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
