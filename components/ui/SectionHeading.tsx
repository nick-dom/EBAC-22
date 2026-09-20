import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  as = "h2",
  align = "left",
}: SectionHeadingProps) {
  const Title = as;

  return (
    <div
      className={`${styles.heading} ${
        align === "center" ? styles.center : ""
      }`}
    >
      <div className={styles.text}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <Title className={styles.title}>{title}</Title>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
