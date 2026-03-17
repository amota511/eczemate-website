"use client";

import { useRef } from "react";
import { type MotionValue, motion, useScroll, useTransform } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { AnimatedHeadline, FadeUp } from "./AnimatedText";

const features = [
  {
    title: "Predict Flare-Ups",
    description:
      "AI-powered forecasting that combines weather data, humidity, and your personal patterns to warn you before a flare strikes.",
    screenshot: "/screenshots/predict.png",
    accent: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Track Your Skin",
    description:
      "Log symptoms, food, products, and wellbeing daily. See 7-day trends and discover what's working — and what's triggering flares.",
    screenshot: "/screenshots/track.png",
    accent: "text-sage-600",
    bg: "bg-sage-50",
  },
  {
    title: "Scan Products",
    description:
      "Point your camera at any product. Instantly see ingredient analysis, risk flags, and whether it's safe for eczema-prone skin.",
    screenshot: "/screenshots/scan.jpg",
    accent: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "Build Your Routine",
    description:
      "Morning and evening routines with gentle check-ins. No streaks, no guilt — just a calm structure that helps your skin heal.",
    screenshot: "/screenshots/routine.png",
    accent: "text-sky-600",
    bg: "bg-sky-50",
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to active feature index (0-3)
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, 3]);

  return (
    <section id="features" className="relative bg-surface">
      {/* Section header — scrolls normally before the pinned area */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 text-center">
        <FadeUp>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sage-200 bg-white/60 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-sage-700 tracking-wide">
              Everything you need
            </span>
          </span>
        </FadeUp>
        <AnimatedHeadline
          text="Your skin, understood"
          as="h2"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-950 tracking-tight"
        />
        <FadeUp delay={0.2}>
          <p className="mt-6 text-lg text-sage-600 max-w-2xl mx-auto">
            Four powerful tools working together to help you understand your
            skin, avoid triggers, and build a routine that actually sticks.
          </p>
        </FadeUp>
      </div>

      {/* Pinned scroll area — 400vh tall to give scroll room for 4 features */}
      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left — Feature text panels */}
              <div className="relative h-[300px]">
                {features.map((feature, index) => (
                  <FeaturePanel
                    key={feature.title}
                    feature={feature}
                    index={index}
                    progress={activeIndex}
                  />
                ))}
              </div>

              {/* Right — Phone with transitioning screens */}
              <div className="relative h-[500px] sm:h-[600px] hidden lg:block">
                {features.map((feature, index) => (
                  <FeaturePhone
                    key={feature.title}
                    screenshot={feature.screenshot}
                    index={index}
                    progress={activeIndex}
                  />
                ))}
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-3 mt-12">
              {features.map((_, index) => (
                <ProgressDot
                  key={index}
                  index={index}
                  progress={activeIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePanel({
  feature,
  index,
  progress,
}: {
  feature: (typeof features)[0];
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (v: number) => {
    const distance = Math.abs(v - index);
    return distance < 0.5 ? 1 - distance * 2 : 0;
  });

  const y = useTransform(progress, (v: number) => {
    const distance = v - index;
    return distance * -40;
  });

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center"
      style={{ opacity, y }}
    >
      <span
        className={`inline-flex self-start px-3 py-1 rounded-full text-sm font-medium mb-4 ${feature.bg} ${feature.accent}`}
      >
        {feature.title}
      </span>
      <h3 className="font-display text-3xl sm:text-4xl font-bold text-sage-950 tracking-tight mb-4">
        {feature.title}
      </h3>
      <p className="text-lg text-sage-600 leading-relaxed max-w-md">
        {feature.description}
      </p>
    </motion.div>
  );
}

function FeaturePhone({
  screenshot,
  index,
  progress,
}: {
  screenshot: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (v: number) => {
    const distance = Math.abs(v - index);
    return distance < 0.5 ? 1 : 0;
  });

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <PhoneMockup
        screenTexturePath={screenshot}
        rotation={[0.1, -0.25, 0.02]}
      />
    </motion.div>
  );
}

function ProgressDot({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const scale = useTransform(progress, (v: number) => {
    const distance = Math.abs(v - index);
    return distance < 0.5 ? 1.4 : 1;
  });

  const opacity = useTransform(progress, (v: number) => {
    const distance = Math.abs(v - index);
    return distance < 0.5 ? 1 : 0.3;
  });

  return (
    <motion.div
      className="w-2.5 h-2.5 rounded-full bg-sage-500"
      style={{ scale, opacity }}
    />
  );
}
