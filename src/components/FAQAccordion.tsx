
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is a hackathon?",
    answer: "A hackathon is a time-bound collaborative event where programmers, designers, and subject matter experts come together to solve problems, build new applications, or improve existing ones. Our hackathon runs for 48 hours and offers substantial prizes for the most innovative solutions."
  },
  {
    question: "Who can participate?",
    answer: "Anyone with relevant skills can participate! Whether you're a developer, designer, product manager, or domain expert, you're welcome to join. We encourage diversity in backgrounds and expertise as it leads to more innovative solutions."
  },
  {
    question: "Do I need a team to participate?",
    answer: "You can register as an individual or as a team. If you register solo, we'll have team formation activities to help you find teammates before the hacking begins. Teams typically consist of 3-5 members with complementary skills."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, participation is completely free thanks to our generous sponsors. We provide the venue, food, drinks, and resources needed for the duration of the event."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, any devices you might need for testing, and your creative energy! We'll provide food, drinks, WiFi, and some hardware for testing. Consider bringing a sleeping bag if you plan to rest during the event."
  },
  {
    question: "How are projects judged?",
    answer: "Projects are evaluated by our panel of industry experts based on innovation, technical complexity, completeness, practical applicability, and presentation quality. The judging criteria are weighted equally to ensure a fair assessment."
  },
  {
    question: "Who owns the intellectual property of the projects?",
    answer: "You and your team retain full ownership of everything you build at the hackathon. However, to be eligible for prizes, your solution must be publicly available (e.g., open-source)."
  },
  {
    question: "Is there support available during the event?",
    answer: "Absolutely! We have mentors from various technology backgrounds available throughout the event to help with technical issues, provide guidance, and offer feedback on your projects."
  }
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <Accordion
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
        className="space-y-6"
      >
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
          >
            <AccordionItem 
              value={`item-${index}`} 
              className="border-none rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300 data-[state=open]:bg-white/10"
            >
              <AccordionTrigger 
                className="px-6 py-4 text-white hover:no-underline text-left font-medium text-lg"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-white/80">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}
