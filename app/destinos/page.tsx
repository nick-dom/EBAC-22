import type { Metadata } from "next";
import { destinos } from "@/lib/destinos";
import CardDestino from "@/components/destinos/CardDestino";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./destinos.module.css";

export const metadata: Metadata = {
  title: "Destinos | PortalViagens",
  description: "Confira a listagem completa de destinos turísticos.",
};

export default function DestinosPage() {
  return (
    <section className={`container ${styles.page}`}>
      <SectionHeading
        as="h1"
        title="Destinos turísticos"
        description={`Escolha entre ${destinos.length} destinos incríveis e descubra tudo que cada lugar tem a oferecer.`}
      />

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}
