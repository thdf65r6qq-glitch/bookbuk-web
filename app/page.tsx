"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AppleLogo = ({ size = 17 }: { size?: number }) => (
  <svg width={size * 0.85} height={size} viewBox="0 0 814 1000" fill="currentColor">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46 790.7 0 663 0 541.8c0-207.1 134.7-316.6 267.9-316.6 71 0 130.2 46.6 174.5 46.6 42.6 0 109.5-49.3 188.3-49.3 30.5 0 130.2 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5" />
    <path d="M12 19.5V22" />
    <path d="M4.93 4.93l1.77 1.77" />
    <path d="M17.3 17.3l1.77 1.77" />
    <path d="M2 12h2.5" />
    <path d="M19.5 12H22" />
    <path d="M4.93 19.07l1.77-1.77" />
    <path d="M17.3 6.7l1.77-1.77" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const IPadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="5" width="17" height="14" rx="2.8" />
    <path d="M9.2 16.4h5.6" />
  </svg>
);

const RuledLines = ({
  top = "28%",
  lineGap = 22,
  lineColor = "var(--rule-line)",
}: {
  top?: string;
  lineGap?: number;
  lineColor?: string;
}) => (
  <div
    className="absolute inset-x-0 bottom-0 pointer-events-none"
    style={{
      top,
      backgroundImage: `repeating-linear-gradient(to bottom, transparent 0 ${lineGap - 1}px, ${lineColor} ${lineGap - 1}px ${lineGap}px)`,
    }}
  />
);

const PagePreview = ({ pageNumber }: { pageNumber: number }) => (
  <div
    className="flex-1 max-w-[180px] rounded-2xl overflow-hidden flex flex-col relative"
    style={{
      backgroundColor: "var(--preview-page-bg)",
      aspectRatio: "3/4",
      border: "1px solid var(--preview-page-border)",
    }}
  >
    <div
      className="flex items-center justify-between px-2 py-1.5 relative z-10"
      style={{ borderBottom: "1px solid var(--preview-toolbar-border)" }}
    >
      <div className="flex gap-1">
        <div className="w-4 h-4 rounded-full" style={{ background: "var(--preview-dot-strong)" }} />
        <div
          className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-semibold"
          style={{ background: "var(--preview-dot-strong)", color: "var(--preview-number-ink)" }}
        >
          {pageNumber}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="w-4 h-4 rounded-full" style={{ background: "var(--preview-dot-soft)" }} />
        <div className="w-4 h-4 rounded-full" style={{ background: "var(--preview-dot-soft)" }} />
        <div className="w-4 h-4 rounded-full" style={{ background: "var(--preview-dot-soft)" }} />
      </div>
    </div>

    <div className="relative flex-1 overflow-hidden">
      <RuledLines top="27%" lineGap={16} lineColor="var(--preview-rule-line)" />
    </div>

    <div className="pb-1.5 relative z-10" />
  </div>
);

const ScrollComfortPreview = () => (
  <div className="glass rounded-3xl p-7 sm:p-8 mt-4">
    <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
      <div className="lg:max-w-sm">
        <p
          className="text-xs font-semibold uppercase tracking-[0.28em] mb-3"
          style={{ color: "var(--color-accent)" }}
        >
          Thoughtful Design
        </p>
        <h3 className="text-2xl font-bold tracking-tight mb-3" style={{ color: "var(--color-ink)" }}>
          Write to the last line. Hands down.
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-secondary)" }}>
          Near the bottom of a page, bookbuk quietly scrolls the content up — leaving a blank zone at the bottom of your screen. Your hand rests comfortably while you finish every last line. No tilting, no stretching. The page takes care of you.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center min-w-0">
        <div className="flex items-end gap-6">
          {/* Page mock — before: cramped */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="rounded-[1.5rem] relative overflow-hidden"
              style={{
                width: 130,
                height: 185,
                backgroundColor: "var(--preview-page-bg)",
                border: "1px solid var(--preview-page-border)",
              }}
            >
              <div className="absolute inset-x-0 top-0 h-9 z-10" style={{ borderBottom: "1px solid var(--preview-toolbar-border)" }} />
              <div className="absolute top-2 left-3 flex gap-1 z-10">
                <div className="w-3 h-3 rounded-full" style={{ background: "var(--preview-dot-strong)" }} />
                <div className="w-3 h-3 rounded-full flex items-center justify-center text-[6px] font-semibold" style={{ background: "var(--preview-dot-strong)", color: "var(--preview-number-ink)" }}>1</div>
              </div>
              <div className="absolute left-[12%] right-[12%] flex flex-col gap-[9px]" style={{ top: "44px" }}>
                {["93%", "86%", "97%", "81%", "94%", "88%", "96%", "83%", "91%", "97%", "78%"].map((w, i) => (
                  <div key={i} className="h-[1.5px] rounded-full" style={{ width: w, backgroundColor: "var(--color-accent)", opacity: 0.45 + i * 0.04 }} />
                ))}
              </div>
            </div>
            <span className="text-[10px] font-medium" style={{ color: "var(--color-ink-secondary)" }}>without it</span>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1.5 pb-7">
            <svg width="34" height="22" viewBox="0 0 34 22" fill="none">
              <path d="M2 11H30M22 3L30 11L22 19" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Page mock — after: comfortable, scrolled up */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="rounded-[1.5rem] relative overflow-hidden"
              style={{
                width: 130,
                height: 185,
                backgroundColor: "var(--preview-page-bg)",
                border: "1px solid var(--preview-page-border)",
              }}
            >
              <div className="absolute inset-x-0 top-0 h-9 z-10" style={{ borderBottom: "1px solid var(--preview-toolbar-border)" }} />
              <div className="absolute top-2 left-3 flex gap-1 z-10">
                <div className="w-3 h-3 rounded-full" style={{ background: "var(--preview-dot-strong)" }} />
                <div className="w-3 h-3 rounded-full flex items-center justify-center text-[6px] font-semibold" style={{ background: "var(--preview-dot-strong)", color: "var(--preview-number-ink)" }}>1</div>
              </div>
              {/* Scrolled-up content */}
              <div className="absolute left-[12%] right-[12%] flex flex-col gap-[9px]" style={{ top: "44px" }}>
                {["88%", "95%", "81%", "93%", "86%", "97%", "78%"].map((w, i) => (
                  <div key={i} className="h-[1.5px] rounded-full" style={{ width: w, backgroundColor: "var(--color-accent)", opacity: 0.55 + i * 0.05 }} />
                ))}
                {/* Active last line being written */}
                <div className="h-[1.5px] rounded-full" style={{ width: "44%", backgroundColor: "var(--color-accent)" }} />
              </div>
              {/* Blank rest zone */}
              <div
                className="absolute inset-x-0 bottom-0 rounded-b-[1.5rem] z-10 flex flex-col items-center justify-center gap-1"
                style={{ height: "32%" }}
              >
                <div
                  className="absolute inset-x-3 top-0"
                  style={{
                    height: "1px",
                    backgroundImage: "repeating-linear-gradient(to right, var(--preview-rule-line) 0 5px, transparent 5px 10px)",
                  }}
                />
                <span className="text-[8px] font-semibold uppercase tracking-widest mt-2" style={{ color: "var(--color-accent)", opacity: 0.45 }}>
                  hand rests here
                </span>
              </div>
            </div>
            <span className="text-[10px] font-medium" style={{ color: "var(--color-ink-secondary)" }}>with bookbuk</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SwipeFlowPreview = () => (
  <div className="glass rounded-3xl p-7 sm:p-8 mb-4">
    <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
      <div className="lg:max-w-sm">
        <p
          className="text-xs font-semibold uppercase tracking-[0.28em] mb-3"
          style={{ color: "var(--color-accent)" }}
        >
          Swipe Magic
        </p>
        <h3 className="text-2xl font-bold tracking-tight mb-3" style={{ color: "var(--color-ink)" }}>
          Premium keeps the pages flowing.
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-secondary)" }}>
          In Premium, your books already have unlimited pages, so when you reach the end, just swipe to the next one. In the free trial, you get 3 books with 3 pages each.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-[1fr_auto_1fr] gap-3 items-center min-w-0">
        <div
          className="rounded-[1.5rem] p-3 relative overflow-hidden min-h-[210px]"
          style={{ backgroundColor: "var(--preview-page-bg)", border: "1px solid var(--preview-page-border)" }}
        >
          <div
            className="absolute inset-x-0 top-0 h-11"
            style={{ borderBottom: "1px solid var(--preview-toolbar-border)" }}
          />
          <div className="absolute top-3 left-3 flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full" style={{ background: "var(--preview-dot-strong)" }} />
            <div
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-semibold"
              style={{ background: "var(--preview-dot-strong)", color: "var(--preview-number-ink)" }}
            >
              3
            </div>
          </div>
          <div className="absolute top-3 right-3 flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full" style={{ background: "var(--preview-dot-soft)" }} />
            <div className="w-3.5 h-3.5 rounded-full" style={{ background: "var(--preview-dot-soft)" }} />
            <div className="w-3.5 h-3.5 rounded-full" style={{ background: "var(--preview-dot-soft)" }} />
          </div>
          <RuledLines top="30%" lineGap={18} lineColor="var(--preview-rule-line)" />
          <div className="absolute left-[10%] right-[10%] top-[29%] flex flex-col gap-3">
            {["100%", "94%", "97%", "91%", "95%", "89%", "96%", "84%"].map((width, index) => (
              <div key={index} className="h-[2px] rounded-full" style={{ width, backgroundColor: "var(--color-accent)" }} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 shrink-0">
          <svg width="40" height="26" viewBox="0 0 40 26" fill="none">
            <path d="M3 13H35M27 5L35 13L27 21" stroke="var(--color-accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs font-semibold" style={{ color: "var(--color-accent)" }}>swipe</span>
        </div>

        <div
          className="rounded-[1.5rem] p-3 relative overflow-hidden min-h-[210px]"
          style={{ backgroundColor: "var(--preview-page-bg)", border: "1px solid var(--preview-page-border)" }}
        >
          <div
            className="absolute inset-x-0 top-0 h-11"
            style={{ borderBottom: "1px solid var(--preview-toolbar-border)" }}
          />
          <div className="absolute top-3 left-3 flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full" style={{ background: "var(--preview-dot-strong)" }} />
            <div
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-semibold"
              style={{ background: "var(--preview-dot-strong)", color: "var(--preview-number-ink)" }}
            >
              4
            </div>
          </div>
          <div className="absolute top-3 right-3 flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full" style={{ background: "var(--preview-dot-soft)" }} />
            <div className="w-3.5 h-3.5 rounded-full" style={{ background: "var(--preview-dot-soft)" }} />
            <div className="w-3.5 h-3.5 rounded-full" style={{ background: "var(--preview-dot-soft)" }} />
          </div>
          <RuledLines top="30%" lineGap={18} lineColor="var(--preview-rule-line)" />
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("bookbuk-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("bookbuk-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen page-shell" style={{ backgroundColor: "var(--color-paper)" }}>
      <div className="px-6 pt-4">
        <div className="max-w-6xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-[1.1rem] overflow-hidden shadow-sm" style={{ backgroundColor: "rgba(20,20,48,0.06)" }}>
              <Image
                src="/bookbuk-logo.png"
                alt="BookBuk icon"
                width={52}
                height={52}
                className="h-[42px] w-[42px] sm:h-[46px] sm:w-[46px]"
                priority
              />
            </div>
          </div>

          <p
            className="text-center text-xl sm:text-2xl font-semibold tracking-tight"
            style={{ color: "var(--color-ink)" }}
          >
            BookBuk
          </p>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span className="theme-toggle__icon">{theme === "light" ? <MoonIcon /> : <SunIcon />}</span>
          </button>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-3 pb-16 text-center">
        <div className="relative mt-1 w-full max-w-5xl mx-auto">
          <div className="w-full max-w-xl mx-auto h-[230px] sm:h-[280px] md:h-[320px] overflow-hidden">
            <div className="relative rounded-[2rem] p-4 shadow-2xl glass" style={{ aspectRatio: "4/3" }}>
              <div className="h-full rounded-2xl flex flex-col overflow-hidden" style={{ backgroundColor: "var(--mock-page-bg)" }}>
                <div className="flex items-center justify-between px-4 pt-3 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--mock-control-bg)", border: "1px solid var(--mock-control-border)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--mock-control-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--mock-control-bg)", border: "1px solid var(--mock-control-border)" }}>
                      <span className="text-xs font-semibold" style={{ color: "var(--mock-control-ink)" }}>1</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--mock-active-bg)", border: "1px solid var(--mock-active-border)" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--mock-control-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--mock-muted-bg)", border: "1px solid var(--mock-muted-border)" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--mock-control-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                        <path d="M20 20H7L3 16l10-10 7 7-2.5 2.5" />
                        <path d="M6.0001 17.0001L17 6" />
                      </svg>
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--mock-muted-bg)", border: "1px solid var(--mock-muted-border)" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--mock-control-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                        <path d="M9 11l-6 6v3h9l3-3" />
                        <path d="M22 12l-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
                      </svg>
                    </div>
                    <div className="h-9 rounded-full flex items-center px-1" style={{ background: "var(--mock-muted-bg)", border: "1px solid var(--mock-muted-border)" }}>
                      <div className="w-8 h-8 flex items-center justify-center" style={{ opacity: 0.45 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--mock-control-ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 7v6h6" />
                          <path d="M3 13C5.4 7.4 12.3 4.8 18 7.4a9 9 0 0 1 3 13.1" />
                        </svg>
                      </div>
                      <div className="w-px h-4" style={{ backgroundColor: "var(--mock-divider)" }} />
                      <div className="w-8 h-8 flex items-center justify-center" style={{ opacity: 0.45 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--mock-control-ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scaleX(-1)" }}>
                          <path d="M3 7v6h6" />
                          <path d="M3 13C5.4 7.4 12.3 4.8 18 7.4a9 9 0 0 1 3 13.1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1 overflow-hidden">
                  <RuledLines top="31%" lineGap={22} lineColor="var(--rule-line)" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 -mt-px mx-auto w-[80%] max-w-3xl">
            <div
              className="mx-auto h-px w-full"
              style={{ backgroundColor: "var(--hero-divider)" }}
            />
          </div>

          <h1
            className="relative z-10 mt-4 text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight gradient-text"
            style={{ textWrap: "balance" }}
          >
            Easier than paper.
          </h1>

          <p
            className="mt-6 text-[1.2rem] sm:text-[1.55rem] leading-[1.15] font-semibold tracking-tight max-w-4xl mx-auto"
            style={{ color: "var(--color-ink)", textWrap: "balance" }}
          >
            <span className="hero-subline">
              Screen is your new paper now be the best thought shaper.
            </span>
          </p>

          <a
            href="#"
            className="mt-7 inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold transition-transform hover:scale-[1.03] active:scale-[0.98]"
            style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
          >
            <AppleLogo size={20} />
            Soon on App Store
          </a>
        </div>

        <div
          className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-sm font-semibold mt-8 glass"
          style={{ color: "var(--color-ink-secondary)" }}
        >
          <span className="inline-flex items-center justify-center" style={{ color: "var(--color-accent)" }}>
            <IPadIcon />
          </span>
          iPad only
        </div>
      </section>

      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 sm:p-10 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--color-ink)" }}>
            Real pages. No endless scrolling.
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--color-ink-secondary)" }}>
            One page, one screen. Write to the last line, then swipe to turn.
          </p>

          <div className="flex items-center justify-center gap-4">
            <PagePreview pageNumber={1} />

            <div className="flex flex-col items-center gap-2">
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <path d="M2 10 H28 M22 4 L28 10 L22 16" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-medium" style={{ color: "var(--color-accent)" }}>swipe</span>
            </div>

            <PagePreview pageNumber={2} />
          </div>
        </div>

        <SwipeFlowPreview />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              ),
              title: "Pen",
              body: "Write with Apple Pencil. No settings, no decisions. Just start.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 20H7L3 16l10-10 7 7-2.5 2.5" />
                  <path d="M6 17L17 6" />
                </svg>
              ),
              title: "Eraser",
              body: "Made a mistake? One tap, it's gone.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l-6 6v3h9l3-3" />
                  <path d="M22 12l-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
                </svg>
              ),
              title: "Highlighter",
              body: (
                <>
                  Mark what matters. Only yellow highlighter,{" "}
                  <span className="inline-highlight">its the best! :)</span>
                </>
              ),
            },
          ].map((feature) => (
            <div key={feature.title} className="glass rounded-3xl p-7 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--icon-chip-bg)", color: "var(--color-ink)" }}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1" style={{ color: "var(--color-ink)" }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-secondary)" }}>{feature.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass rounded-3xl p-7 flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-11 h-11 rounded-2xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "var(--icon-chip-bg)", color: "var(--color-ink)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1" style={{ color: "var(--color-ink)" }}>Pages create books, books create life.</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-secondary)" }}>
              Create books, fill pages, and move through them naturally. Swipe to turn, tap to jump the page number, and keep every note neatly organised.
            </p>
          </div>
        </div>

        <ScrollComfortPreview />
      </section>

      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto rounded-[2.5rem] p-12 text-center" style={{ backgroundColor: "var(--premium-bg)", border: "1px solid var(--premium-border)" }}>
          <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] mb-5" style={{ color: "var(--premium-subtle)", opacity: 0.9 }}>
            Premium
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--premium-text)" }}>
            Unlimited, everything.
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--premium-subtle)" }}>
            More books. More pages. No caps, no limits. Just write as much as you want.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            {["Unlimited books", "Unlimited pages", "Cancel anytime"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ backgroundColor: "var(--premium-chip-bg)", color: "var(--premium-text)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7L5.5 10L11.5 4" stroke="var(--premium-subtle)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--premium-button-bg)", color: "var(--premium-button-text)" }}
          >
            <AppleLogo size={18} />
            Get BookBuk
          </a>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm" style={{ color: "var(--color-ink-secondary)", borderTop: "1px solid var(--footer-border)" }}>
        <p className="font-semibold mb-1" style={{ color: "var(--color-ink)" }}>BookBuk</p>
        <p>© {new Date().getFullYear()} BookBuk. iPad only.</p>
        <p className="mt-3">
          <a href="/privacypolicy" className="font-medium" style={{ color: "var(--color-accent)" }}>
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
}
