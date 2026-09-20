import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <span className={styles.code}>404</span>
      <h1>Página ou destino não encontrado</h1>
      <p>O que você procura pode ter mudado de endereço ou nunca existiu.</p>
      <Link href="/destinos" className={styles.cta}>
        Ver todos os destinos
      </Link>
    </div>
  );
}
