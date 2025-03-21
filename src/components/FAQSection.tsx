
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "When and where will the hackathon take place?",
    answer: "The hackathon will be held virtually with a global participant base. All activities and submissions will be conducted online to ensure worldwide accessibility."
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
    answer: "This year's theme is 'AI for Good.' Projects should aim to address global challenges, promote sustainability, or help communities using artificial intelligence."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    }
  };
  
  const handleAccordionChange = (value: string[]) => {
    setOpenItems(value);
  };
  
  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-hackathon-dark">
      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-b from-hackathon-dark/0 via-hackathon-blue/5 to-hackathon-dark/0 z-0" 
      />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to know about the hackathon
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={handleAccordionChange}
            className="space-y-4"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="overflow-hidden"
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border-none bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 text-white hover:bg-white/5 transition-colors data-[state=open]:bg-white/5">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xl font-medium text-left">{item.question}</span>
                      <div className="bg-white/10 rounded-full p-1 ml-4">
                        {openItems.includes(`item-${index}`) ? (
                          <ChevronUp className="h-5 w-5 text-white" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-white" />
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="text-white/80 px-6 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/60">
            Still have questions? <a href="/faq" className="text-blue-400 hover:text-blue-300 underline">Visit our FAQ page</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
