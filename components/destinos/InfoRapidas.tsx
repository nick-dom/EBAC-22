import type { Destino } from "@/lib/destinos";
import styles from "./InfoRapidas.module.css";

interface InfoRapidasProps {
  destino: Destino;
}

export default function InfoRapidas({ destino }: InfoRapidasProps) {
  return (
    <div className={styles.infoBox}>
      <h3>Informações rápidas</h3>
      <dl>
        <dt>País</dt>
        <dd>{destino.pais}</dd>

        <dt>Preço médio</dt>
        <dd>{destino.precoMedio}</dd>

        <dt>Melhor época</dt>
        <dd>{destino.melhorEpoca}</dd>

        <dt>Coordenadas</dt>
        <dd>
          {destino.latitude.toFixed(2)}, {destino.longitude.toFixed(2)}
        </dd>
      </dl>
    </div>
  );
}
