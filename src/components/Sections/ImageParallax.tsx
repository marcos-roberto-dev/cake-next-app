'use client'

import Image from "next/image";
import { MouseParallaxChild } from "react-parallax-mouse";

interface ImageParallaxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
  parallaxOptions?: {
    factorX: number;
    factorY: number;
  };
}

export function ImageParallax({ src, alt, width, height, style, parallaxOptions }: ImageParallaxProps) {
  return (
    <>
      <MouseParallaxChild factorX={parallaxOptions?.factorX} factorY={parallaxOptions?.factorY}>
        <Image
          style={{ top: -40, left: 50, zIndex: 2, ...style }}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </MouseParallaxChild>
    </>
  );
}