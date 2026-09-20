import Link from "next/link";
import { destinos } from "@/lib/destinos";
import Hero from "@/components/home/Hero";
import FeatureCard from "@/components/home/FeatureCard";
import DestinoCardCompacto from "@/components/destinos/DestinoCardCompacto";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./page.module.css";

const DESTAQUES_COUNT = 3;

const FEATURES = [
  {
    icon: "🌍",
    title: "Destinos selecionados",
    description:
      "Uma curadoria de lugares incríveis, com descrições completas e dicas de melhor época para viajar.",
  },
  {
    icon: "🌤️",
    title: "Clima em tempo real",
    description:
      "Cada destino conta com dados meteorológicos atualizados, consultados diretamente de uma API pública.",
  },
  {
    icon: "⚡",
    title: "Feito com Next.js",
    description:
      "Rotas dinâmicas, API Routes e componentes reutilizáveis para uma experiência rápida e organizada.",
  },
];

export default function Home() {
  const destaques = destinos.slice(0, DESTAQUES_COUNT);

  return (
    <>
      <Hero
        eyebrow="Bem-vindo ao PortalViagens"
        title="Descubra destinos incríveis ao redor do mundo"
        subtitle="Explore praias paradisíacas, cidades históricas e paisagens de tirar o fôlego. Reunimos informações completas para você planejar sua próxima aventura com confiança."
        ctaHref="/destinos"
        ctaLabel="Ver todos os destinos"
        imageSrc="/images/hero-viagem.webp"
        imageAlt="Ilustração de um avião sobrevoando o pôr do sol"
      />

      <section className={`container ${styles.destaques}`}>
        <SectionHeading
          title="Destinos em destaque"
          action={
            <Link href="/destinos" className={styles.sectionLink}>
              Ver listagem completa →
            </Link>
          }
        />

        <div className={styles.grid}>
          {destaques.map((destino) => (
            <DestinoCardCompacto key={destino.id} destino={destino} />
          ))}
        </div>
      </section>

      <section className={`container ${styles.info}`}>
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>
    </>
  );
}
