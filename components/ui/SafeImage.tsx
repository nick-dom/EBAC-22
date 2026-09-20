"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import styles from "./SafeImage.module.css";

interface SafeImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  wrapperClassName?: string;
}

export default function SafeImage({
  wrapperClassName,
  className,
  alt,
  ...props
}: SafeImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  return (
    <div
      className={[styles.wrapper, wrapperClassName].filter(Boolean).join(" ")}
    >
      {status === "loading" && (
        <div className={styles.skeleton} aria-hidden="true" />
      )}

      {status === "error" ? (
        <div className={styles.fallback} role="img" aria-label={alt}>
          <span className={styles.fallbackIcon} aria-hidden="true">
            🖼️
          </span>
          <span className={styles.fallbackText}>Imagem indisponível</span>
        </div>
      ) : (
        <Image
          {...props}
          alt={alt}
          className={[
            className,
            status === "loaded" ? styles.visible : styles.hidden,
          ]
            .filter(Boolean)
            .join(" ")}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  );
}
