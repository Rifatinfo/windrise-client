
'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { ModelCard } from './ModelCard'
import { SliderControls } from './SliderControls'
import { MODELS } from './data/model';
import { ringOffset, wrapIndex } from './data/slide';
import Link from 'next/link';

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

export function MiniquinHero() {
  const total = MODELS.length
  const [active, setActive] = useState(0)
  const canvasScale = useCanvasScale()
  const pointerStartX = useRef<number | null>(null)
  const didDrag = useRef(false)

  const goTo = useCallback((index: number) => {
    if (didDrag.current) return
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

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX
    didDrag.current = false
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return
    if (Math.abs(event.clientX - pointerStartX.current) > 10) didDrag.current = true
  }

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return
    const dragDistance = event.clientX - pointerStartX.current
    if (Math.abs(dragDistance) > 48) (dragDistance < 0 ? next : prev)()
    pointerStartX.current = null
    window.setTimeout(() => {
      didDrag.current = false
    }, 0)
  }

  const activeModel = MODELS[active]

  return (
    <section
      className="relative w-full overflow-hidden bg-warmwhite"
      style={{ background: 'radial-gradient(120% 100% at 50% 22%, #fffefd 0%, #f8f6f2 63%, #f0ede6 100%)' }}
      aria-roledescription="carousel"
      aria-label="Featured looks"
    >
      <div className="relative mx-auto h-[max(700px,69.63vw)] max-h-[1183px] min-h-[700px] w-full max-w-[1699px] ">
        <img
          src="/assets/WRWatermark.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-1.3%] top-[26.1%] z-0 w-[46%] select-none opacity-[2.12]"
        />
        <img
          src="https://cdn.magicpatterns.com/uploads/dhbGLHSMuu9HSs3nKXbDvm/W.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[40%] z-0 w-[48%] -translate-x-1/2 select-none opacity-[2.12]"
        />

        <header className="absolute left-[10%] top-[8.2%] z-[150] w-[770px] max-w-[56vw] mt-20">
          <h1 className="font-serif-display leading-[0.93] lg:text-6xl tracking-[-0.035em] text-ink">
            Designed for the moments
            <span className="block text-[#B3A08E]">you live every day.</span>
          </h1>
          <p className="mt-5 max-w-[615px] text-xl leading-[1.5] text-ink/70">
            Versatile pieces made to bring comfort, confidence and simplicity wherever life takes you.
          </p>
        </header>

        {/* ---- Slider stage ---- */}
        <div
          className="absolute inset-x-0 bottom-[8.3%] top-[26%] cursor-grab select-none active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div className="relative h-full w-full " aria-live="polite">
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
            <p className="text-[11px] lg:text-xl font-medium tracking-[0.04em] text-ink">{activeModel.category}</p>
            <p className="mt-2 text-[11px] md:text-lg lg:text-lg text-[#7D7D7D] leading-[1.45] text-ink/50">
              Soft where it matters. Made for the rhythm of everyday life.
            </p>
           
            <Link
          href="#"
          className="group inline-flex items-center gap-2  border-transparent pb-0.5 text-[13.5px] lg:text-[16px] font-light transition-[gap] duration-200 hover:gap-3 hover:border-[#1C1B1A] sm:text-[15px] mt-4"
        >
          Discover 
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path
              d="M6 3.5L10.5 8L6 12.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

