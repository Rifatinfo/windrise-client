import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function SliderControls({ onPrev, onNext }: SliderControlsProps) {
  const base =
    "group absolute top-1/2 -translate-y-1/2 z-[200] flex h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full border border-[#EAE7E0] bg-[linear-gradient(180deg,#F7F5F1_0%,#E3DFD6_100%)] text-black shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3DFD6] sm:h-[33px] sm:w-[33px]";
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        onPointerDown={(event) => event.stopPropagation()}
        aria-label="Previous model"
        title="Previous look"
        className={`${base} left-[4%] sm:left-[10%]`}
      >
        <ChevronLeftIcon
          className="h-5 w-5 text-black transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={1.5}
        />
      </button>
      <button
        type="button"
        onClick={onNext}
        onPointerDown={(event) => event.stopPropagation()}
        aria-label="Next model"
        title="Next look"
        className={`${base} right-[4%] sm:right-[10%]`}
      >
        <ChevronRightIcon
          className="h-5 w-5 text-black transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={1.5}
        />{" "}
      </button>
    </>
  );
}
