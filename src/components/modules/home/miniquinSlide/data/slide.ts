import type { Transition } from 'framer-motion'

export const SPRING: Transition = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.9,
}

export function ringOffset(index: number, active: number, total: number): number {
  let difference = index - active
  const half = total / 2
  if (difference > half) difference -= total
  if (difference < -half) difference += total
  return difference
}

export function wrapIndex(index: number, total: number): number {
  return ((index % total) + total) % total
}

/**
 * Five fixed campaign slots on the 1699 × 1183 composition.
 * Centre is the first (tall) line; ±1 are the elevated rear line;
 * ±2 are the two outer figures on the front line.
 */
export function cardStyle(distance: number, canvasScale: number) {
  const slots: Record<number, { x: number; y: number; scale: number; zIndex: number }> = {
    '-2': { x: -318, y: -50, scale: 0.61, zIndex: 50 },
    '-1': { x: -172, y: -108, scale: 0.63, zIndex: 60 },
    '0': { x: 0, y: 0, scale: 1, zIndex: 100 },
    '1': { x: 172, y: -108, scale: 0.63, zIndex: 60 },
    '2': { x: 318, y: -50, scale: 0.61, zIndex: 50 },
  }
  const slot = slots[distance] ?? slots[distance < 0 ? -2 : 2]
  const isActive = distance === 0

  return {
    x: slot.x * canvasScale,
    y: slot.y * canvasScale,
    scale: slot.scale,
    opacity: isActive ? 1 : distance === -1 || distance === 1 ? 0.82 : 0.76,
    blur: isActive ? 0 : distance === -1 || distance === 1 ? 0.45 : 0.8,
    zIndex: slot.zIndex,
  }
}
