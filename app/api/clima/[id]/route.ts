import { NextResponse } from "next/server";
import { getDestinoById } from "@/lib/destinos";

interface RouteParams {
  params: Promise<{ id: string }>;
}

function descreverTempo(codigo: number): string {
  const mapa: Record<number, string> = {
    0: "Céu limpo",
    1: "Predominantemente limpo",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Neblina",
    48: "Neblina com geada",
    51: "Garoa leve",
    53: "Garoa moderada",
    55: "Garoa intensa",
    61: "Chuva leve",
    63: "Chuva moderada",
    65: "Chuva forte",
    71: "Neve leve",
    73: "Neve moderada",
    75: "Neve forte",
    80: "Pancadas de chuva leves",
    81: "Pancadas de chuva moderadas",
    82: "Pancadas de chuva fortes",
    95: "Tempestade",
  };

  return mapa[codigo] ?? "Condição indisponível";
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const destino = getDestinoById(id);

  if (!destino) {
    return NextResponse.json(
      { erro: "Destino não encontrado." },
      { status: 404 }
    );
  }

  try {
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", String(destino.latitude));
    url.searchParams.set("longitude", String(destino.longitude));
    url.searchParams.set("current_weather", "true");

    const resposta = await fetch(url.toString(), {
      next: { revalidate: 600 },
    });

    if (!resposta.ok) {
      throw new Error("Falha ao consultar a API de clima.");
    }

    const dados = await resposta.json();
    const atual = dados.current_weather;

    return NextResponse.json({
      clima: {
        temperatura: atual.temperature,
        velocidadeVento: atual.windspeed,
        codigoTempo: atual.weathercode,
        descricaoTempo: descreverTempo(atual.weathercode),
      },
    });
  } catch {
    return NextResponse.json(
      { erro: "Não foi possível obter os dados de clima no momento." },
      { status: 502 }
    );
  }
}
