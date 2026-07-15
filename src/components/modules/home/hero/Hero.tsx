"use client";
import { useEffect, useState } from "react";

const HERO_IMAGE = "/assets/hero-1.png";

const SLIDE_POSITIONS = ["50% center", "42% center", "58% center", "50% 42%"];
const TOTAL_SLIDES = SLIDE_POSITIONS.length;
const SLIDE_DURATION_MS = 9000;
export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % TOTAL_SLIDES);
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(intervalId);
  }, [activeSlide]);
  return (
    <section className="relative w-full h-screen min-h-[560px] overflow-hidden bg-black">
      {/* Background image */}
      <img
        src={HERO_IMAGE}
        alt="Model wearing striped shirt seated on a stone bench surrounded by greenery and white roses"
        className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out"
        style={{
          objectPosition: SLIDE_POSITIONS[activeSlide],
        }}
      />
      {/* Subtle overlay to keep text legible */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent"
        aria-hidden="true"
      />

      {/* Header */}

      {/* Hero text content */}
      <div className="relative z-10 flex h-[calc(100%-76px)] items-center">
        <div className="w-full px-6 lg:px-20 md:px-20">
          <div className="max-w-md ">
            <h1 className="text-6xl font-light leading-[0.95] bg-gradient-to-b from-[#E6E1CB] to-[#66635A] bg-clip-text text-transparent sm:text-7xl lg:text-9xl font-avegreat">
              Wear
              <br />
              the Rise
            </h1>
            <p className="mt-6 max-w-md text-lg md:text-xl lg:text-xl leading-relaxed text-white/90">
              Modern essentials inspired by movement, simplicity and everyday
              elegance.
            </p>
            <button className="mt-7 rounded-md bg-white px-12 md:px-16 py-2 md:py-3 text-xl font-medium font-dam-sans text-black shadow-[0_0_18px_4px_rgba(255,255,255,0.5)] transition-all hover:bg-white hover:shadow-[0_0_26px_7px_rgba(255,255,255,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 lg:left-auto lg:right-8 lg:translate-x-0"
        role="tablist"
        aria-label="Hero slides"
      >
        {Array.from({
          length: TOTAL_SLIDES,
        }).map((_, i) => {
          const isActive = activeSlide === i;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveSlide(i)}
              className={`rounded-full border border-white/40 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${isActive ? "h-2 w-2 border-white bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)]" : "h-1 w-1 bg-white/35 hover:bg-white/70"}`}
            />
          );
        })}
      </div>
    </section>
  );
}
