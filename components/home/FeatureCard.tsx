import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <h3>
        <span aria-hidden="true">{icon}</span> {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}
