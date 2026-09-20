import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import styles from "./Hero.module.css";

interface HeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  ctaHref,
  ctaLabel,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <Link href={ctaHref} className={styles.cta}>
            {ctaLabel}
          </Link>
        </div>

        <div className={styles.heroImage}>
          <SafeImage
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 500px"
            priority
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
}
