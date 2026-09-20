import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinos, getDestinoById } from "@/lib/destinos";
import DestinoHero from "@/components/destinos/DestinoHero";
import InfoRapidas from "@/components/destinos/InfoRapidas";
import ClimaWidget from "@/components/destinos/ClimaWidget";
import styles from "./destino.module.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return destinos.map((destino) => ({ id: destino.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const destino = getDestinoById(id);

  if (!destino) {
    return { title: "Destino não encontrado | PortalViagens" };
  }

  return {
    title: `${destino.nome} | PortalViagens`,
    description: destino.descricaoCurta,
  };
}

export default async function DestinoPage({ params }: PageProps) {
  const { id } = await params;
  const destino = getDestinoById(id);

  if (!destino) {
    notFound();
  }

  return (
    <article>
      <DestinoHero
        nome={destino.nome}
        pais={destino.pais}
        imagem={destino.imagem}
      />

      <div className={`container ${styles.content}`}>
        <div className={styles.main}>
          <h2 className={styles.sectionTitle}>Sobre o destino</h2>
          <p className={styles.description}>{destino.descricao}</p>

          <h2 className={styles.sectionTitle}>Clima</h2>
          <ClimaWidget destinoId={destino.id} />
        </div>

        <aside className={styles.sidebar}>
          <InfoRapidas destino={destino} />
          <Link href="/destinos" className={styles.otherLink}>
            Ver outros destinos →
          </Link>
        </aside>
      </div>
    </article>
  );
}
