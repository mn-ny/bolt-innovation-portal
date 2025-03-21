
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "When and where will the hackathon take place?",
    answer: "The hackathon will be held from October 15-17, 2023 at the Tech Convention Center in San Francisco. We'll also have a virtual track for remote participants."
  },
  {
    question: "Who can participate in the hackathon?",
    answer: "The hackathon is open to developers, designers, product managers, and innovators of all skill levels from around the world. Teams can consist of 1-4 members."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, participation in the hackathon is completely free. We want to ensure that financial constraints don't prevent talented individuals from participating."
  },
  {
    question: "What is the theme of the hackathon?",
    answer: "This year's theme is 'Building for a Sustainable Future.' Projects should aim to address environmental challenges, promote sustainability, or help communities adapt to climate change."
  },
  {
    question: "What kind of projects can we build?",
    answer: "You can build any type of software project that aligns with the hackathon theme. This could include web applications, mobile apps, hardware prototypes, AI/ML models, blockchain applications, and more."
  },
  {
    question: "How will projects be judged?",
    answer: "Projects will be evaluated based on innovation, technical complexity, design and user experience, alignment with the theme, and potential impact. Each criterion will be weighted equally."
  },
  {
    question: "What technologies can we use?",
    answer: "You're free to use any programming languages, frameworks, libraries, or APIs. We encourage the use of cutting-edge technologies like AI, blockchain, IoT, but using familiar tools is completely fine."
  },
  {
    question: "Will there be mentors available?",
    answer: "Yes, experienced mentors from various technology companies will be available throughout the event to provide guidance, technical support, and feedback on your projects."
  }
];

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  const handleAccordionChange = (value: string[]) => {
    setExpandedItems(value);
  };

  return (
    <div className="min-h-screen bg-hackathon-dark">
      <Header />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-20 px-6 max-w-4xl mx-auto"
      >
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold text-white mb-8 font-display text-center"
        >
          Frequently Asked Questions
        </motion.h1>
        
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/80 mb-12 text-center text-lg"
        >
          Everything you need to know about the hackathon
        </motion.p>
        
        <div className="glassmorphism p-1 rounded-2xl bg-white/5 backdrop-blur-lg border-white/10">
          <Accordion
            type="multiple"
            value={expandedItems}
            onValueChange={handleAccordionChange}
            className="space-y-1"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border-none bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden mb-2"
                >
                  <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-white/10 transition-colors data-[state=open]:bg-white/10">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xl font-medium text-left">{item.question}</span>
                      {expandedItems.includes(`item-${index}`) ? (
                        <ChevronUp className="h-5 w-5 text-white/70 shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-white/70 shrink-0" />
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-white/80">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60">
            Still have questions? <a href="mailto:info@hackathon.com" className="text-blue-400 hover:text-blue-300 underline">Contact us</a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
