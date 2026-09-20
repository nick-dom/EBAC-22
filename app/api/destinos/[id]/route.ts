import { NextResponse } from "next/server";
import { getDestinoById } from "@/lib/destinos";

interface RouteParams {
  params: Promise<{ id: string }>;
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

  return NextResponse.json({ destino });
}
