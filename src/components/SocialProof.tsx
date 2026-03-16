"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "./AnimatedText";

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {prefix}
          {value}
          {suffix}
        </motion.span>
      ) : (
        <span className="opacity-0">
          {prefix}
          {value}
          {suffix}
        </span>
      )}
    </motion.span>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.svg
          key={star}
          className="w-7 h-7 text-gold"
          fill={star <= Math.floor(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={star <= Math.floor(rating) ? 0 : 1.5}
          viewBox="0 0 24 24"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: star * 0.1,
            type: "spring",
            damping: 15,
            stiffness: 200,
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </motion.svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="relative py-28 sm:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeUp>
          <div className="flex flex-col items-center gap-4 mb-12">
            <StarRating rating={5} />
            <p className="text-sage-600 text-lg">
              Rated{" "}
              <span className="font-semibold text-sage-950">
                <AnimatedCounter value={5} suffix=" stars" />
              </span>{" "}
              on the App Store
            </p>
          </div>
        </FadeUp>

        {/* Testimonial */}
        <FadeUp delay={0.2}>
          <blockquote className="max-w-2xl mx-auto">
            <p className="font-display text-2xl sm:text-3xl text-sage-950 leading-relaxed italic">
              &ldquo;Finally an app that helps me understand my daughter&apos;s
              eczema instead of just tracking it.&rdquo;
            </p>
            <footer className="mt-6 text-sage-500 text-base">
              &mdash; Parent using Eczemate
            </footer>
          </blockquote>
        </FadeUp>

        {/* Trust badges */}
        <FadeUp delay={0.4}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sage-400">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-sage-950">
                <AnimatedCounter value={4} suffix=" tools" />
              </span>
              <span className="text-sm">working together</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-sage-950">
                <AnimatedCounter value={2} suffix=" min" />
              </span>
              <span className="text-sm">to set up</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-sage-950">
                <AnimatedCounter prefix="" value={0} suffix=" guilt" />
              </span>
              <span className="text-sm">just support</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
