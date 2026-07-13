
// 'use client';

// import { motion } from 'framer-motion'
// import type { NavigationCategory } from './Navigationdataset'
// type MegaMenuProps = {
//   category: NavigationCategory
//   onMouseEnter: () => void
//   onMouseLeave: () => void
// }
// export function MegaMenu({
//   category,
//   onMouseEnter,
//   onMouseLeave,
// }: MegaMenuProps) {
//   return (
//     <motion.section
//       id="desktop-mega-menu"
//       aria-label={`${category.label} collections`}
//       initial={{
//         opacity: 0,
//         y: -18,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       exit={{
//         opacity: 0,
//         y: -12,
//       }}
//       transition={{
//         duration: 0.28,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       className="absolute left-0 top-20 z-40 w-full bg-[#080808] text-white shadow-[0_22px_42px_rgba(0,0,0,0.38)]"
//     >
//       <div className="mx-auto grid  grid-cols-[0.75fr_1.18fr_1fr_1.08fr_1.28fr] gap-x-20 px-6  lg:px-15 py-6">
//         <section className="pt-1">
//           <ul className="space-y-2.5">
//             {category.collections.map((collection) => (
//               <li key={collection}>
//                 <a
//                   href="#collection"
//                   className="text-[13px] text-white/55 transition duration-200 hover:translate-x-0.5 hover:text-white"
//                 >
//                   {collection}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </section>

//         {category.groups.map((group) => (
//           <MenuColumn key={group.name} title={group.name} items={group.items} />
//         ))}

//         <a
//           href="#collection"
//           aria-label={category.promo.cta}
//           className="block self-start overflow-hidden rounded-md"
//         >
//           <img
//             src={category.promo.image}
//             alt={category.promo.imageAlt}
//             className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-[1.025]"
//           />
//         </a>
//       </div>
//     </motion.section>
//   )
// }
// type MenuColumnProps = {
//   title: string
//   items: readonly string[]
// }
// function MenuColumn({ title, items }: MenuColumnProps) {
//   return (
//     <section>
//       <h2 className="border-b border-white/25 pb-2 text-[12px] font-medium text-white/70">
//         {title}
//       </h2>
//       <ul className="mt-2.5 space-y-1.5">
//         {items.map((item) => (
//           <li key={item}>
//             <a
//               href="#collection"
//               className="block text-[12px] text-white/55 transition duration-200 hover:translate-x-0.5 hover:text-white"
//             >
//               {item}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }



'use client';

import { motion } from 'framer-motion'
import type { NavigationCategory } from './Navigationdataset'

type MegaMenuProps = {
  category: NavigationCategory
  onMouseEnter: () => void
  onMouseLeave: () => void
}

// Group column sizes, sliced to however many groups a category actually has
// (prevents the leftover empty-track bug when a category has fewer than 3
// groups, e.g. "men" only has Clothing + Footwear).
const GROUP_COLUMN_SIZES = ['1.18fr', '1fr', '1.08fr', '1fr', '1fr'] as const

// Exact gap the design calls for between the last content column and the
// promo image when a category has only 2 groups. 3-group categories keep
// the normal grid gap (gap-x-20) with no override.
const TWO_COLUMN_IMAGE_GAP_PX = 253

export function MegaMenu({
  category,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  const isTwoColumn = category.groups.length === 2

  // 200px matches the header's `grid-cols-[200px_1fr_auto]` logo column.
  // Using a fixed px width here (not a proportional fr) means whatever
  // comes right after it — the first group column, "Clothing" — always
  // starts at the same x-position as "Men" in the header nav, since both
  // containers share the same px-6 lg:px-15 outer padding.
  const gridTemplateColumns = [
    '100px', // collections — fixed width, matches header logo column
    ...GROUP_COLUMN_SIZES.slice(0, category.groups.length), // exactly N group tracks
    '1.28fr', // promo image
  ].join(' ')

  return (
    <motion.section
      id="desktop-mega-menu"
      aria-label={`${category.label} collections`}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-0 top-20 z-40 w-full bg-[#080808] text-white shadow-[0_22px_42px_rgba(0,0,0,0.38)]"
    >
      <div
        className="mx-auto grid gap-x-20 px-6 lg:px-15 py-6"
        style={{ gridTemplateColumns }}
      >
        <section className="pt-1">
          <ul className="space-y-2.5">
            {category.collections.map((collection) => (
              <li key={collection}>
                <a
                  href="#collection"
                  className="text-[15px] font-medium text-[#707070] transition duration-200 hover:translate-x-0.5 hover:text-white font-dm-sans"
                >
                  {collection}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {category.groups.map((group) => (
          <MenuColumn key={group.name} title={group.name} items={group.items} />
        ))}

        <a
          href="#collection"
          aria-label={category.promo.cta}
          className="block self-start overflow-hidden rounded-md"
          // Grid's own gap-x-20 already applies between every track. For the
          // 2-group case, add the extra margin needed to make the *total*
          // space between the last content column and the image exactly
          // 253px, per the design. 80px (gap-x-20) + 173px = 253px.
          style={isTwoColumn ? { marginLeft: `${TWO_COLUMN_IMAGE_GAP_PX - 80}px` } : undefined}
        >
          <img
            src={category.promo.image}
            alt={category.promo.imageAlt}
            className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-[1.025]"
          />
        </a>
      </div>
    </motion.section>
  )
}

type MenuColumnProps = {
  title: string
  items: readonly string[]
}

function MenuColumn({ title, items }: MenuColumnProps) {
  return (
    <section>
      <h2 className="border-b border-[#707070] pb-2 text-[15px] font-medium text-[#707070] font-dm-sans ">
        {title}
      </h2>
      <ul className="mt-2.5 space-y-1.5">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#collection"
              className="block text-[15px] text-[#707070] transition duration-200 hover:translate-x-0.5 hover:text-white font-dm-sans"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}