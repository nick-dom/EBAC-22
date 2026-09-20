import Link from "next/link";
import type { Destino } from "@/lib/destinos";
import SafeImage from "@/components/ui/SafeImage";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <Link href={`/destinos/${destino.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <SafeImage
          src={destino.imagem}
          alt={`Foto de ${destino.nome}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        <span className={styles.badge}>{destino.pais}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{destino.nome}</h3>
        <p className={styles.description}>{destino.descricaoCurta}</p>
        <span className={styles.link}>Ver detalhes →</span>
      </div>
    </Link>
  );
}
