"use client";

import { useEffect, useState } from "react";
import styles from "./ClimaWidget.module.css";

interface ClimaWidgetProps {
  destinoId: string;
}

interface ClimaData {
  temperatura: number;
  velocidadeVento: number;
  codigoTempo: number;
  descricaoTempo: string;
}

interface ClimaResponse {
  clima?: ClimaData;
  erro?: string;
}

export default function ClimaWidget({ destinoId }: ClimaWidgetProps) {
  const [clima, setClima] = useState<ClimaData | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    let cancelado = false;

    async function buscarClima() {
      try {
        setCarregando(true);
        setErro(null);
        const resposta = await fetch(`/api/clima/${destinoId}`);
        const dados: ClimaResponse = await resposta.json();

        if (!resposta.ok || !dados.clima) {
          throw new Error(dados.erro ?? "Não foi possível carregar o clima.");
        }

        if (!cancelado) {
          setClima(dados.clima);
        }
      } catch {
        if (!cancelado) {
          setErro("Não foi possível carregar o clima agora.");
        }
      } finally {
        if (!cancelado) {
          setCarregando(false);
        }
      }
    }

    buscarClima();

    return () => {
      cancelado = true;
    };
  }, [destinoId]);

  if (carregando) {
    return (
      <div className={styles.widget}>
        <p className={styles.loading}>Carregando clima em tempo real…</p>
      </div>
    );
  }

  if (erro || !clima) {
    return (
      <div className={styles.widget}>
        <p className={styles.error}>{erro ?? "Clima indisponível."}</p>
      </div>
    );
  }

  return (
    <div className={styles.widget}>
      <div>
        <p className={styles.label}>Clima agora</p>
        <p className={styles.temperature}>{Math.round(clima.temperatura)}°C</p>
        <p className={styles.condition}>{clima.descricaoTempo}</p>
      </div>
      <div className={styles.divider} />
      <div>
        <p className={styles.label}>Vento</p>
        <p className={styles.wind}>{Math.round(clima.velocidadeVento)} km/h</p>
      </div>
      <p className={styles.source}>Dados via Open-Meteo</p>
    </div>
  );
}
