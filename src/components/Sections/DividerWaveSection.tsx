import { VariantsWaves } from "../VariantsWaves";

interface DividerWaveSectionProps {
  bgTop: string;
  bgBottom: string
  className?: string
  variant?: string
}

export function DividerWaveSection({ className, bgBottom, bgTop, variant }: DividerWaveSectionProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className={`block w-full h-[50px] sm:h-[150px] ${className}`}
    >
      <rect width="100%" height="100%" className={bgTop} />
      {VariantsWaves({ bg: bgBottom, variant: variant || "default" })}
    </svg>
  );
}
