import Link from "next/link";
import type { Destino } from "@/lib/destinos";
import SafeImage from "@/components/ui/SafeImage";
import styles from "./DestinoCardCompacto.module.css";

interface DestinoCardCompactoProps {
  destino: Destino;
}

export default function DestinoCardCompacto({
  destino,
}: DestinoCardCompactoProps) {
  return (
    <Link href={`/destinos/${destino.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <SafeImage
          src={destino.imagem}
          alt={`Foto de ${destino.nome}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
      </div>
      <p className={styles.name}>{destino.nome}</p>
      <p className={styles.country}>{destino.pais}</p>
    </Link>
  );
}
