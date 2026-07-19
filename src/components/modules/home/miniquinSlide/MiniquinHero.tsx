
'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import { ringOffset, wrapIndex } from './data/slide'
import { MODELS } from './data/model'
import { ModelCard } from './ModelCard'
import { SliderControls } from './SliderControls'

function useCanvasScale() {
  const [canvasScale, setCanvasScale] = useState(1)
  useEffect(() => {
    const compute = () => {
      const width = window.innerWidth
      setCanvasScale(Math.min(1, Math.max(0.52, width / 1699)))
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])
  return canvasScale
}

export function HeroMiniwuin() {
  const total = MODELS.length
  const [active, setActive] = useState(0)
  const canvasScale = useCanvasScale()
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback((index: number) => {
    setActive((current) => (current === index ? current : wrapIndex(index, total)))
  }, [total])
  const next = useCallback(() => setActive((current) => wrapIndex(current + 1, total)), [total])
  const prev = useCallback(() => setActive((current) => wrapIndex(current - 1, total)), [total])

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 45) (delta < 0 ? next : prev)()
    touchStartX.current = null
  }

  const activeModel = MODELS[active]

  return (
    <section
      className="relative w-full overflow-hidden bg-warmwhite"
      style={{ background: 'radial-gradient(120% 100% at 50% 22%, #fffefd 0%, #f8f6f2 63%, #f0ede6 100%)' }}
      aria-roledescription="carousel"
      aria-label="Featured looks"
    >
      <div className="relative mx-auto h-[max(700px,69.63vw)] max-h-[1183px] min-h-[700px] w-full max-w-[1699px]">
        <img
          src="/assets/connect.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[4.3%] top-[18.1%] z-0 w-[36%] select-none opacity-[0.1]"
        />
        <img
          src="/assets/W.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[28%] z-0 w-[48%] -translate-x-1/2 select-none opacity-[0.12]"
        />

        <header className="absolute left-[16.1%] top-[8.2%] z-[150] w-[470px] max-w-[56vw]">
          <h1 className="font-serif-display text-[clamp(2.1rem,3vw,3.65rem)] leading-[0.93] tracking-[-0.035em] text-ink">
            Designed for the moments
            <span className="block text-beige">you live every day.</span>
          </h1>
          <p className="mt-5 max-w-[315px] text-[clamp(0.68rem,0.7vw,0.83rem)] leading-[1.5] text-ink/70">
            Versatile pieces made to bring comfort, confidence and simplicity wherever life takes you.
          </p>
        </header>

        {/* ---- Slider stage ---- */}
        <div
          className="absolute inset-x-0 bottom-[8.3%] top-[26%]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative h-full w-full" aria-live="polite">
            {MODELS.map((model, i) => {
              const distance = ringOffset(i, active, total)
              return (
                <ModelCard
                  key={model.id}
                  model={model}
                  distance={distance}
                  canvasScale={canvasScale}
                  onSelect={() => goTo(i)}
                />
              )
            })}
          </div>
          <SliderControls onPrev={prev} onNext={next} />
        </div>

        <div className="pointer-events-none absolute bottom-[17%] right-[12.3%] z-[150] hidden sm:block">
          <motion.div
            key={activeModel.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="pointer-events-auto w-[176px]"
          >
            <p className="text-[11px] font-medium tracking-[0.04em] text-ink">{activeModel.category}</p>
            <p className="mt-2 text-[11px] leading-[1.45] text-ink/50">
              Soft where it matters. Made for the rhythm of everyday life.
            </p>
            <button
              type="button"
              className="group mt-4 inline-flex items-center gap-1.5 text-[10px] text-ink transition-colors hover:text-beige focus:outline-none"
            >
              Discover
              <ArrowRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

