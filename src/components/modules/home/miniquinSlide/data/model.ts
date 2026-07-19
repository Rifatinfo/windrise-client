export interface ModelItem {
  id: number
  name: string
  category: string
  image: string
  imageScale: number
}

/**
 * The order intentionally matches the visual lineup around the opening centre look:
 * left outer → left inner → centre → right inner → right outer.
 */
export const MODELS: ModelItem[] = [
  {
    id: 1,
    name: 'The Oxford Stripe',
    category: 'COMFORT',
    image: 'https://cdn.magicpatterns.com/uploads/5GcXXQuaFAJQR8jvihwDBs/01.png',
    imageScale: 1,
  },
  {
    id: 2,
    name: 'The Bomber Edit',
    category: 'MODERN',
    image: 'https://cdn.magicpatterns.com/uploads/2FASGbhZaBPCHNmFPXT9BX/03.png',
    imageScale: 0.9,
  },
  {
    id: 3,
    name: 'The Relaxed Shirt',
    category: 'SIGNATURE',
    image: 'https://cdn.magicpatterns.com/uploads/gDaAxnUXHDCS99PDd7wLU6/02.png',
    imageScale: 1.13,
  },
  {
    id: 4,
    name: 'The Layered Casual',
    category: 'ESSENTIALS',
    image: 'https://cdn.magicpatterns.com/uploads/kPKXh15JYDeUTPHXXaU421/05.png',
    imageScale: 1.14,
  },
  {
    id: 5,
    name: 'The Everyday Polo',
    category: 'COMFORT',
    image: 'https://cdn.magicpatterns.com/uploads/ffm86VtdhuMwbBmkU6zJxx/04.png',
    imageScale: 0.9,
  },
]
