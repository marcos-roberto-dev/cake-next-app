'use client'

import { MouseParallaxContainer } from "react-parallax-mouse"
import { CustomSection } from "./CustomSection"

interface SectionContainerParallaxProps {
  children: React.ReactNode;
  bg?: string
  className?: string
}

const defaultColor = '#fff'

export function SectionContainerParallax({ children, bg, className  }: SectionContainerParallaxProps) {
  return <>
    <MouseParallaxContainer
      globalFactorX={0.3}
      globalFactorY={0.3}
      resetOnLeave
      className="w-full"
    >
      <CustomSection bg={bg ?? defaultColor} className={`grid items-center gap-[48px] justify-center grid-cols-1  md:justify-start md:grid-cols-2 ${className}`}>
        {children ?? ''}
      </CustomSection>
    </MouseParallaxContainer>
  </>
}