
import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Twitter } from "lucide-react";

interface JudgeProps {
  name: string;
  role: string;
  twitter: string;
  bio: string;
  image: string;
}

const judges: JudgeProps[] = [
  {
    name: "Pieter Levels",
    role: "Founder",
    twitter: "levelsio",
    bio: "Founder of Nomad List and Remote OK. Building profitable internet businesses with a focus on bootstrapping and indie hacking.",
    image: "https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg"
  },
  {
    name: "Logan Kilpatrick",
    role: "AI Developer Relations",
    twitter: "OfficialLoganK",
    bio: "AI Developer Relations at OpenAI, formerly at Apple. Passionate about making AI accessible to developers worldwide and building AI-powered tools.",
    image: "https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg"
  },
  {
    name: "Sara Du",
    role: "Co-founder & CEO",
    twitter: "saranormous",
    bio: "Co-founder & CEO of Alloy Automation. Forbes 30 Under 30. Building the future of e-commerce automation and integration platforms.",
    image: "https://pbs.twimg.com/profile_images/1689443134919327744/geqEJeF8_400x400.jpg"
  },
  {
    name: "Theo Browne",
    role: "Founder",
    twitter: "theo",
    bio: "Founder of Ping Labs, creator of t3.gg. TypeScript enthusiast and developer educator focused on modern web technologies and frameworks.",
    image: "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg"
  },
  {
    name: "Evan You",
    role: "Creator of Vue.js",
    twitter: "youyuxi",
    bio: "Creator of Vue.js, Vite, and other open source tools. Independent open source developer focused on making web development more accessible and efficient.",
    image: "https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg"
  },
  {
    name: "Krishna Panyam",
    role: "Co-founder",
    twitter: "thisiskp_",
    bio: "Co-founder at Reflect. Building tools for thought and knowledge management to help people think better and work more efficiently.",
    image: "https://pbs.twimg.com/profile_images/1288449070344937473/fKlvccnM_400x400.jpg"
  },
  {
    name: "Alex Albert",
    role: "Co-founder",
    twitter: "alexalbert__",
    bio: "Co-founder at Rows. Building the next generation spreadsheet with superpowers that combines the flexibility of spreadsheets with the power of programming.",
    image: "https://pbs.twimg.com/profile_images/1856486626072915968/JEQpB9CW_400x400.jpg"
  },
  {
    name: "Ben Tossell",
    role: "Founder",
    twitter: "bentossell",
    bio: "Founder of Makerpad (acquired by Zapier). No-code advocate and entrepreneur helping people build without traditional coding knowledge.",
    image: "https://pbs.twimg.com/profile_images/1878086921726943233/vOx1kjeP_400x400.jpg"
  },
  {
    name: "Ricardo Cabello",
    role: "Creator of Three.js",
    twitter: "mrdoob",
    bio: "Creator of Three.js. Pushing the boundaries of what's possible on the web with 3D graphics and WebGL technologies.",
    image: "https://pbs.twimg.com/profile_images/1619147369999917056/5jd5MK9C_400x400.jpg"
  },
  {
    name: "Andrej Karpathy",
    role: "AI Researcher",
    twitter: "karpathy",
    bio: "Previously Senior Director of AI at Tesla, founding member of OpenAI. Researcher and educator in deep learning, computer vision, and AI systems.",
    image: "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_400x400.jpg"
  },
  {
    name: "Tim Soret",
    role: "Game Designer & Filmmaker",
    twitter: "timsoret",
    bio: "Game designer and filmmaker. Creative Director of The Last Night at Odd Tales studio, known for combining pixel art with modern rendering techniques.",
    image: "https://pbs.twimg.com/profile_images/1882867567099809793/qTScdAu-_400x400.jpg"
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
                    <CardDescription className="text-white/70 flex items-center gap-1 mt-1">
                      <Twitter className="w-3.5 h-3.5 text-blue-400" />
                      <span>@{judge.twitter}</span>
                    </CardDescription>
                    <CardDescription className="text-white/70">
                      {judge.role}
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
