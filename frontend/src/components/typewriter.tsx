"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "./ui/button";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Unbiased",
    },
    {
      text: "conversations!",
    },
    {
      text: "anonymous",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "platform",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[100%]  ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <button className="p-[3px] relative text-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-4  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Join now
        </div>
      </button>


        <button className="relative inline-flex h-full overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  bg-slate-950 p-5 text-3xl font-semibold text-white backdrop-blur-3xl">
            Login
          </span>
        </button>
    
      </div>
    </div>
  );
}
