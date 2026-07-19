// import Image from "next/image";
// import Link from "next/link";

// export default function WindriseHero() {
//   return (
//     <section
//       className="
//         flex flex-col items-stretch gap-0
//         px-0 pb-10 pt-0
//         sm:flex-row sm:items-center sm:justify-between
//         sm:gap-9 sm:px-[6vw] sm:py-12
//         lg:gap-18 lg:px-[18vw] lg:py-16
//       "
//       style={{
//         background:
//           "linear-gradient(120deg, #FFFFFF 63%, #EAE4DF 100%)",
//       }}
//     >
//       {/* Image */}
//       <div
//         className="
//           order-1 w-full px-4 pt-4
//           sm:order-2 sm:max-w-[60%] sm:px-0 sm:pt-0
//           lg:max-w-[700px] border -pr-40
//         "
//       >
//         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#DAD5CF] sm:aspect-[880/450] sm:rounded-[18px]">
//           <Image
//             src="/assets/sunglass-boy.png"
//             alt="Windrise model wearing a striped shirt and jeans"
//             fill
//             priority
//             sizes="(max-width: 640px) 100vw, 50vw"
//             className="object-cover object-[center_8%] sm:object-[center_15%]"
//           />
//         </div>
//       </div>

//       {/* Text content */}
//       <div className="order-2 max-w-full px-5 pt-6 sm:order-1 sm:max-w-[460px] sm:px-0 sm:pt-0">
//         <h1 className="mb-5 text-[22px] font-medium leading-[1.15] tracking-tight text-[#1C1B1A] sm:text-[32px] lg:text-[40px]">
//           Simple forms
//           <br />
//           Endless versatility
//         </h1>

//         <p className="mb-5 max-w-full text-[13.5px] leading-[1.7] text-[#7A7670] sm:mb-8 sm:max-w-[380px] sm:text-[15px]">
//           Designed with premium materials and refined craftsmanship, each
//           piece reflects the simplicity, comfort and confidence of Windrise.
//         </p>

//         <Link
//           href="#"
//           className="group inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-[13.5px] font-medium text-[#1C1B1A] transition-[gap] duration-200 hover:gap-3 hover:border-[#1C1B1A] sm:text-[15px]"
//         >
//           Discover Collection
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             className="transition-transform duration-200 group-hover:translate-x-0.5"
//           >
//             <path
//               d="M6 3.5L10.5 8L6 12.5"
//               stroke="currentColor"
//               strokeWidth="1.4"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Link>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function WindriseHero() {
  return (
    <section
      style={{
    background: "linear-gradient(to top, #EAE4DF 0%, #FFFFFF 100%)",
  }}
    >
      <div className="mx-auto flex flex-col px-6 py-9 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-20 md:py-16 lg:py-20 lg:max-w-7xl">
      {/* Image */}
      <div
        className="
          order-1 w-full pt-4
          md:order-2 md:w-1/2 md:pt-0  md:-mr-20
        "
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-[#DAD5CF] sm:aspect-[880/450] sm:rounded-[9px]">
          <Image
            src="/assets/sunglass-boy.png"
            alt="Windrise model wearing a striped shirt and jeans"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 60vw"
            className="object-cover object-[center_8%] sm:object-[center_15%]"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="order-2 max-w-full pt-6 md:order-1 md:w-1/2 md:max-w-[460px] md:pt-0">
        <h1 className="mb-5 text-[22px] font-medium leading-[1.15] tracking-tight text-[#1C1B1A] sm:text-[32px] lg:text-[40px]">
          Simple forms
          <br />
          Endless versatility
        </h1>

        <p className="mb-5 max-w-full text-[13.5px] leading-[1.7] text-[#7A7670] sm:mb-8 sm:max-w-[380px] sm:text-[15px]">
          Designed with premium materials and refined craftsmanship, each
          piece reflects the simplicity, comfort and confidence of Windrise.
        </p>

        <Link
          href="#"
          className="group inline-flex items-center gap-2  border-transparent pb-0.5 text-[13.5px] font-medium text-[#1C1B1A] transition-[gap] duration-200 hover:gap-3 hover:border-[#1C1B1A] sm:text-[15px]"
        >
          Discover Collection
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
      </div>
      </div>
    </section>
  );
}