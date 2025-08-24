'use client'

import Image from "next/image";
import { MouseParallaxChild } from "react-parallax-mouse";

interface ImageParallaxProps {
  src: string;
  alt: string;
  width: number;
  minWidth?: number;
  height: number;
  minHeight?: number;
  style?: React.CSSProperties;
  parallaxOptions?: {
    factorX: number;
    factorY: number;
  };
}

export function ImageParallax({ src, alt, width,minWidth, height, minHeight, style, parallaxOptions }: ImageParallaxProps) {
  return (
    <>
      <MouseParallaxChild factorX={parallaxOptions?.factorX} factorY={parallaxOptions?.factorY}>
        <Image
          style={{ top: -40, left: 50, zIndex: 2, minHeight, minWidth, ...style }}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </MouseParallaxChild>
    </>
  );
}