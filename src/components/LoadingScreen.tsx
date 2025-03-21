
import React from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? "auto" : "none"
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-hackathon-dark`}
    >
      <div className="space-y-12 max-w-md px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-24 h-24">
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500/30"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute inset-2 rounded-full bg-blue-500/50"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
            <motion.div 
              className="absolute inset-4 rounded-full bg-blue-500"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1,
                ease: "easeInOut",
                delay: 0.4
              }}
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Skeleton className="h-12 w-full bg-white/5" />
            <div className="mt-3 space-y-2">
              <Skeleton className="h-3 w-4/5 bg-white/5" />
              <Skeleton className="h-3 w-3/5 bg-white/5" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center"
          >
            <Skeleton className="h-10 w-1/2 rounded-full bg-white/5" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-white/60 text-sm"
        >
          Loading the global hackathon experience...
        </motion.p>
      </div>
    </motion.div>
  );
}
