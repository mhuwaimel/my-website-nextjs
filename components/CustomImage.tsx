"use client";
import Image, { type ImageProps } from "next/image";
import React from "react";

function CustomImage({ alt, src: initialSrc, ...props }: ImageProps) {
  const [src, setSrc] = React.useState<ImageProps["src"]>(initialSrc);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setSrc("/notImg.jpg")}
      placeholder="blur"
      priority
      blurDataURL="/notImg.jpg"
    />
  );
}

export default CustomImage;
