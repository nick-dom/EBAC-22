import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import styles from "./DestinoHero.module.css";

interface DestinoHeroProps {
  nome: string;
  pais: string;
  imagem: string;
}

export default function DestinoHero({ nome, pais, imagem }: DestinoHeroProps) {
  return (
    <div className={styles.heroImageWrapper}>
      <SafeImage
        src={imagem}
        alt={`Foto de ${nome}`}
        fill
        sizes="100vw"
        priority
        className={styles.heroImage}
      />
      <div className={styles.heroOverlay} />
      <div className={`container ${styles.heroContent}`}>
        <Link href="/destinos" className={styles.backLink}>
          ← Voltar para destinos
        </Link>
        <span className={styles.country}>{pais}</span>
        <h1>{nome}</h1>
      </div>
    </div>
  );
}
