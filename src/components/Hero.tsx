export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:pt-20 lg:pb-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-surface to-sage-100/40" />

      {/* Organic blobs */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-sage-200/40 blur-3xl blob" />
      <div className="absolute bottom-10 -right-24 w-[400px] h-[400px] rounded-full bg-sage-300/30 blur-3xl blob-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage-100/50 blur-3xl blob" />

      {/* Grain overlay */}
      <div className="grain absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sage-500/10 border border-sage-500/20 rounded-full px-4 py-1.5 mb-6 sm:mb-8">
              <div className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
              <span className="text-sage-700 text-sm font-medium">
                Predict &middot; Understand &middot; Protect
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-sage-950 mb-5 sm:mb-6">
              Stay ahead of
              <span className="block text-sage-500">eczema flare-ups</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-sage-700 leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0">
              Eczemate predicts flares before they happen, tracks your symptoms, and
              helps you understand what triggers your skin. Your eczema
              companion, powered by AI.
            </p>

            {/* Store CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              id="download"
            >
              <a
                href="https://apps.apple.com/us/app/eczemate-eczema-skin-wellness/id6759606605"
                className="group inline-flex items-center justify-center sm:justify-start gap-3 bg-sage-950 text-white px-6 py-4 rounded-[var(--radius-button)] hover:bg-sage-800 transition-all shadow-lg shadow-sage-950/10 hover:shadow-xl hover:shadow-sage-950/15 hover:-translate-y-0.5"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80">
                    Download on the
                  </div>
                  <div className="text-base font-semibold -mt-0.5">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="group inline-flex items-center justify-center sm:justify-start gap-3 bg-white text-sage-950 px-6 py-4 rounded-[var(--radius-button)] border border-border hover:border-sage-300 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
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

          {/* Right: Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative z-10 w-[240px] sm:w-[280px] lg:w-[300px] h-[490px] sm:h-[570px] lg:h-[620px] bg-sage-950 rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl shadow-sage-950/20">
                {/* Screen */}
                <div className="w-full h-full rounded-[2rem] sm:rounded-[2.4rem] bg-surface overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-sage-950 rounded-b-2xl z-10" />

                  {/* Hardcoded app home screen */}
                  <div className="w-full h-full bg-[#F6F7F5] overflow-hidden">
                    <div className="px-3 pt-8 sm:pt-9 pb-4 space-y-2.5">
                      {/* App Header */}
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#8FAEA3] font-bold text-sm sm:text-base tracking-tight">
                          eczemate
                        </span>
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#5F6F68]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>

                      {/* Weekly Progress Card */}
                      <div className="bg-white rounded-xl p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1">
                            <svg className="w-2.5 h-2.5 text-[#8FAEA3]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                            </svg>
                            <span className="text-[7px] sm:text-[8px] font-semibold text-[#1F2A26]">This Week</span>
                          </div>
                          <div className="flex items-center gap-0.5 bg-[rgba(76,175,80,0.12)] rounded-full px-1.5 py-0.5">
                            <svg className="w-2 h-2 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                            </svg>
                            <span className="text-[6px] sm:text-[7px] font-medium text-[#4CAF50]">Easing</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex-1 text-center">
                            <div className="text-[11px] sm:text-[13px] font-bold text-[#8FAEA3]">
                              4<span className="text-[7px] sm:text-[8px] font-normal text-[#5F6F68]">/10</span>
                            </div>
                            <div className="text-[5px] sm:text-[6px] text-[#5F6F68]">Severity</div>
                          </div>
                          <div className="w-px h-5 bg-[#E5E7E5]" />
                          <div className="flex-1 text-center">
                            <div className="text-[11px] sm:text-[13px] font-bold text-[#8FAEA3]">
                              5<span className="text-[7px] sm:text-[8px] font-normal text-[#5F6F68]">/7</span>
                            </div>
                            <div className="text-[5px] sm:text-[6px] text-[#5F6F68]">Days Logged</div>
                          </div>
                          <div className="w-px h-5 bg-[#E5E7E5]" />
                          <div className="flex-1 text-center">
                            <div className="text-[11px] sm:text-[13px] font-bold text-[#C7A96B]">12</div>
                            <div className="text-[5px] sm:text-[6px] text-[#5F6F68]">Streak</div>
                          </div>
                        </div>
                        <div className="mt-1.5 pt-1.5 border-t border-[rgba(0,0,0,0.05)] flex items-center justify-center gap-1">
                          <svg className="w-2.5 h-2.5 text-[#4CAF50]" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[6px] sm:text-[7px] text-[#5F6F68]">Logged today</span>
                        </div>
                      </div>

                      {/* Flare Risk Card */}
                      <div className="bg-white rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden flex">
                        <div className="w-1 bg-[#4CAF50] shrink-0" />
                        <div className="flex-1 flex items-center justify-between px-3 py-2.5">
                          <div>
                            <div className="text-[5px] sm:text-[6px] font-semibold tracking-wider uppercase text-[#5F6F68]">Today&apos;s Flare Risk</div>
                            <div className="text-[11px] sm:text-[13px] font-bold text-[#4CAF50]">Low</div>
                          </div>
                          <svg className="w-2.5 h-2.5 text-[#5F6F68]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </div>
                      </div>

                      {/* Your Skin Section */}
                      <div>
                        <div className="text-[8px] sm:text-[9px] font-semibold text-[#1F2A26] mb-1.5">Your Skin</div>
                        {/* Affected Areas */}
                        <div className="bg-white rounded-xl p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] mb-1.5">
                          <div className="text-[5px] sm:text-[5.5px] font-semibold tracking-[1px] uppercase text-[#5F6F68] mb-1.5">Affected Areas</div>
                          <div className="flex gap-1 flex-wrap">
                            {["Face", "Hands", "Arms", "Neck"].map((area) => (
                              <span key={area} className="bg-[rgba(143,174,163,0.12)] border border-[rgba(143,174,163,0.25)] rounded-full px-1.5 py-0.5 text-[5px] sm:text-[6px] font-medium text-[#8FAEA3]">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Flare Frequency */}
                        <div className="bg-white rounded-xl p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] mb-1.5">
                          <div className="text-[5px] sm:text-[5.5px] font-semibold tracking-[1px] uppercase text-[#5F6F68] mb-1.5">Flare Frequency</div>
                          <div className="flex rounded-lg bg-[rgba(229,231,229,0.3)] p-0.5">
                            <div className="flex-1 flex items-center justify-center gap-0.5 py-1 rounded-md">
                              <div className="w-1 h-1 rounded-full bg-[#5F6F68]" />
                              <span className="text-[5px] sm:text-[6px] text-[#5F6F68]">Rarely</span>
                            </div>
                            <div className="flex-1 flex items-center justify-center gap-0.5 py-1 rounded-md bg-[rgba(255,152,0,0.15)]">
                              <div className="w-1 h-1 rounded-full bg-[#FF9800]" />
                              <span className="text-[5px] sm:text-[6px] font-semibold text-[#FF9800]">Sometimes</span>
                            </div>
                            <div className="flex-1 flex items-center justify-center gap-0.5 py-1 rounded-md">
                              <div className="w-1 h-1 rounded-full bg-[#5F6F68]" />
                              <span className="text-[5px] sm:text-[6px] text-[#5F6F68]">Often</span>
                            </div>
                          </div>
                        </div>
                        {/* Known Triggers */}
                        <div className="bg-white rounded-xl p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                          <div className="text-[5px] sm:text-[5.5px] font-semibold tracking-[1px] uppercase text-[#5F6F68] mb-1.5">Known Triggers</div>
                          <div className="flex gap-1 flex-wrap">
                            {[
                              { icon: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z", label: "Weather" },
                              { icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5", label: "Products" },
                              { icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", label: "Stress" },
                            ].map((trigger) => (
                              <span key={trigger.label} className="bg-[rgba(143,174,163,0.1)] border border-[rgba(143,174,163,0.2)] rounded-full px-1.5 py-0.5 text-[5px] sm:text-[6px] font-medium text-[#8FAEA3] flex items-center gap-0.5">
                                <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d={trigger.icon} />
                                </svg>
                                {trigger.label}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div>
                        <div className="text-[8px] sm:text-[9px] font-semibold text-[#1F2A26] mb-1.5">Quick Actions</div>
                        <div className="space-y-1">
                          {[
                            { title: "Log Symptoms", subtitle: "Track how you feel today", color: "#8FAEA3", icon: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { title: "Scan Product", subtitle: "Check ingredient safety", color: "#6B9AC4", icon: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" },
                            { title: "Learn", subtitle: "Tips, tools, and guides", color: "#C7A96B", icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" },
                          ].map((action) => (
                            <div key={action.title} className="bg-white rounded-lg p-2 flex items-center gap-2 border border-[rgba(0,0,0,0.04)]">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: `${action.color}20` }}>
                                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: action.color }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d={action.icon} />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-[7px] sm:text-[8px] font-medium text-[#1F2A26]">{action.title}</div>
                                <div className="text-[5px] sm:text-[6px] text-[#5F6F68]">{action.subtitle}</div>
                              </div>
                              <svg className="w-2 h-2 text-[#5F6F68] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                              </svg>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements — z-20 to sit above the phone frame */}
              <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 z-20 bg-white rounded-2xl shadow-lg shadow-sage-900/5 p-2.5 sm:p-3 flex items-center gap-2 sm:gap-2.5 border border-border/50">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-sage-950">
                    Low Risk
                  </div>
                  <div className="text-[10px] text-sage-500">
                    Today&apos;s forecast
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-4 sm:-bottom-2 sm:-left-6 z-20 bg-white rounded-2xl shadow-lg shadow-sage-900/5 p-2.5 sm:p-3 flex items-center gap-2 sm:gap-2.5 border border-border/50">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-sage-50 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-sage-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-sage-950">
                    7-Day Streak
                  </div>
                  <div className="text-[10px] text-sage-500">
                    Keep tracking!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
