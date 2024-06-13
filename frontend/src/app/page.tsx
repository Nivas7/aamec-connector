"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { TypewriterEffectSmoothDemo } from "@/components/typewriter";
import { CardStackDemo } from "@/components/Card";
import { Separator } from "@radix-ui/react-separator";
import { BackgroundGradientAnimation } from "@/components/ui/gradent-animation";
import { FloatingNavDemo } from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesPreview } from "@/components/Anoymitu";

export default function LampDemo() {

  const words = ["freedom", "liberation", "emancipation"];

  return (
      <div>
        <FloatingNavDemo />
        <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <TypewriterEffectSmoothDemo />
      </motion.h1>
    </LampContainer>
    <BackgroundGradientAnimation>
        <div className="flex justify-between items-center p-5">
  <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-semibold text-white dark:text-neutral-400">
        Embrace the 
        <FlipWords words={words} /> <br />
        to voice your authentic self, without the fear of judgment or repercussions, in a secure and inclusive digital sanctuary.
        </div>
        </div>
        <CardStackDemo />
        </div>
    </BackgroundGradientAnimation>
    <SparklesPreview />
    <div className="h-screen"></div>
    </div>
  );
}
