"use client";

import { useInView } from "@/hooks/useInView";

export default function CTA() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-900 via-sage-950 to-sage-900" />

      {/* Organic shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sage-700/20 blur-3xl blob" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sage-600/15 blur-3xl blob-reverse" />

      {/* Grain */}
      <div className="grain absolute inset-0 opacity-20" />

      {/* Content */}
      <div
        ref={ref}
        className={`reveal ${isVisible ? "visible" : ""} relative z-10 mx-auto max-w-3xl px-6 text-center`}
      >
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Your skin deserves
          <span className="block text-sage-300">better days ahead</span>
        </h2>
        <p className="text-lg sm:text-xl text-sage-300/80 leading-relaxed mb-12 max-w-xl mx-auto">
          Join thousands of people taking control of their eczema. Eczemate is free
          to download with powerful features to help you every day.
        </p>

        {/* Store CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/us/app/eczemate-eczema-skin-wellness/id6759606605"
            className="group inline-flex items-center justify-center gap-3 bg-white text-sage-950 px-7 py-4 rounded-[var(--radius-button)] hover:bg-sage-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider opacity-60">
                Download on the
              </div>
              <div className="text-base font-semibold -mt-0.5">App Store</div>
            </div>
          </a>

          <a
            href="#"
            className="group inline-flex items-center justify-center gap-3 bg-transparent text-white px-7 py-4 rounded-[var(--radius-button)] border border-white/20 hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.33a1 1 0 010 1.73l-2.302 1.33-2.535-2.535 2.535-2.535zM5.864 3.458L16.8 9.79l-2.302 2.302-8.635-8.635z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider opacity-60">
                Get it on
              </div>
              <div className="text-base font-semibold -mt-0.5">
                Google Play
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
