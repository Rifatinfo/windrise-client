'use client';

import { motion } from 'framer-motion'
import { ModelItem } from './data/model'
import { cardStyle, SPRING } from './data/slide'


interface ModelCardProps {
  model: ModelItem
  distance: number
  canvasScale: number
  onSelect: () => void
}

export function ModelCard({ model, distance, canvasScale, onSelect }: ModelCardProps) {
  const { x, y, scale, opacity, blur, zIndex } = cardStyle(distance, canvasScale)
  const isActive = distance === 0
  // Every selected look uses the same full-size hero treatment as model 01.
  // Individual source-image balancing is retained only for supporting positions.
  const finalScale = isActive ? 1 : scale * model.imageScale

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-label={`View ${model.name}`}
      aria-current={isActive ? 'true' : undefined}
      className="absolute bottom-0 left-1/2 -ml-[250px] flex h-[96%] w-[500px] origin-bottom cursor-pointer flex-col items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-beige focus-visible:ring-offset-4 focus-visible:ring-offset-warmwhite"
      style={{ zIndex, willChange: 'transform, filter', touchAction: 'pan-y' }}
      title={`Make ${model.name} the featured look`}
      initial={false}
      animate={{ x, y, scale: finalScale, opacity, filter: `blur(${blur}px)` }}
      transition={SPRING}
      whileHover={{ scale: finalScale * 1.05, transition: { duration: 0.3, ease: 'easeOut' } }}
    >
      <div className="relative flex h-full w-full items-end justify-center">
        <img
          src={model.image}
          alt={model.name}
          draggable={false}
          className="pointer-events-none block h-full max-w-[90vw] select-none object-contain object-bottom"
          style={{ transform: 'translate3d(0,0,0)' }}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none -mt-2 h-5 w-[68%] rounded-[100%]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(26,26,26,0.22), transparent 72%)',
          opacity: isActive ? 0.8 : 0.38,
        }}
      />
    </motion.button>
  )
}
