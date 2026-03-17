"use client";

import { motion } from "framer-motion";
import { AnimatedHeadline, FadeUp } from "./AnimatedText";
import PhoneMockup from "@/components/PhoneMockup";

export default function CTA() {
  return (
    <section className="relative lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-sage-900 via-sage-950 to-sage-900">
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-sage-700/20 blur-3xl" />
        <div className="blob-reverse absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-sage-600/15 blur-3xl" />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            <AnimatedHeadline
              text="Your skin deserves better days ahead"
              as="h2"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
            />

            <FadeUp delay={0.3}>
              <p className="mt-6 text-lg text-sage-300/80 max-w-md mx-auto lg:mx-0">
                Join thousands of people taking control of their eczema.
                Download Eczemate and start understanding your skin today.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="mt-10">
                <a
                  href="https://apps.apple.com/us/app/eczemate-eczema-care/id6740091498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-sage-950 font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
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
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              damping: 20,
              stiffness: 80,
            }}
          >
            <PhoneMockup screenTexturePath="/screenshots/routine.png" size="sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
