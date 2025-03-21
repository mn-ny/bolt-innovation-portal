
import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface JudgeProps {
  name: string;
  role: string;
  company: string;
  bio: string;
  image?: string;
}

const judges: JudgeProps[] = [
  {
    name: "Dr. Sophia Chen",
    role: "AI Research Director",
    company: "Future Labs",
    bio: "Dr. Chen leads groundbreaking research in artificial intelligence focusing on ethical AI development. Previously worked at Google DeepMind and has published over 40 papers on machine learning.",
    image: "/placeholder.svg"
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    company: "TechForward",
    bio: "Marcus has founded three successful tech startups and specializes in scaling innovative solutions. His expertise spans cloud computing, distributed systems, and enterprise architecture.",
    image: "/placeholder.svg"
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Innovation",
    company: "GlobalTech",
    bio: "Elena brings 15 years of experience in digital transformation and innovation strategy. She has led numerous hackathons and mentored hundreds of early-stage startups worldwide.",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. James Wilson",
    role: "Professor",
    company: "MIT",
    bio: "Dr. Wilson is a renowned professor specializing in computational thinking and machine learning. He has authored several books on AI ethics and sustainable technology development.",
    image: "/placeholder.svg"
  },
  {
    name: "Aisha Patel",
    role: "Founder & CEO",
    company: "EcoTech Solutions",
    bio: "Aisha is passionate about using technology to solve environmental challenges. Her company has developed award-winning sustainable tech solutions deployed in over 20 countries.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Zhang",
    role: "Lead Developer",
    company: "OpenAI",
    bio: "Michael is an expert in generative AI models and has contributed to numerous open-source projects. His work focuses on making AI more accessible and beneficial for everyone.",
    image: "/placeholder.svg"
  }
];

export default function Judges() {
  return (
    <div className="min-h-screen bg-hackathon-dark">
      <Header />
      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6 font-display text-center">Judges</h1>
        <p className="text-white/80 mb-16 text-center max-w-2xl mx-auto text-lg">
          Our panel of distinguished industry experts and thought leaders will evaluate your submissions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 border-2 border-white/10">
                    <AvatarImage src={judge.image} alt={judge.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-lg">
                      {judge.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl text-white">{judge.name}</CardTitle>
                    <CardDescription className="text-white/70">
                      {judge.role} at {judge.company}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-white/80 text-sm">{judge.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
