
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface SliderControlsProps {
  onPrev: () => void
  onNext: () => void
}

export function SliderControls({ onPrev, onNext }: SliderControlsProps) {
  const base =
    'group absolute top-1/2 z-[200] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/60 text-ink/70 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-ink hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-beige'

  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous model"
        title="Previous look"
        className={`${base} left-[8%] sm:left-[10%]`}
      >
        <ChevronLeftIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next model"
        title="Next look"
        className={`${base} right-[8%] sm:right-[10%]`}
      >
        <ChevronRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </>
  )
}
