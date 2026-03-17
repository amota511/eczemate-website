"use client";

import { motion } from "framer-motion";
import { AnimatedHeadline, FadeUp } from "./AnimatedText";
import PhoneMockup from "@/components/PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-mesh">
      {/* Floating blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-sage-200/40 blur-3xl" />
        <div className="blob-reverse absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full bg-sage-300/30 blur-3xl" />
        <div className="blob absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-sage-100/50 blur-3xl" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            {/* Badge */}
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sage-200 bg-white/60 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
                <span className="text-sm font-medium text-sage-700 tracking-wide">
                  Predict &middot; Understand &middot; Protect
                </span>
              </div>
            </FadeUp>

            {/* Headline */}
            <AnimatedHeadline
              text="Stay ahead of your next flare"
              as="h1"
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-sage-950 tracking-tight leading-[1.05]"
            />

            {/* Subtext */}
            <FadeUp delay={0.4}>
              <p className="mt-6 text-lg sm:text-xl text-sage-700 leading-relaxed max-w-md">
                Predict flare-ups, scan products for irritants, track what
                triggers your skin, and build a routine that works.
              </p>
            </FadeUp>

            {/* CTA */}
            <FadeUp delay={0.6}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://apps.apple.com/us/app/eczemate-eczema-care/id6740091498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sage-950 text-white font-semibold rounded-2xl hover:bg-sage-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sage-950/20"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download for iOS
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right — Phone */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 60, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              damping: 20,
              stiffness: 80,
              delay: 0.3,
            }}
          >
            <PhoneMockup screenTexturePath="/screenshots/routine.png" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
