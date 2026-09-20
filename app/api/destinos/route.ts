import { NextResponse } from "next/server";
import { destinos } from "@/lib/destinos";

export async function GET() {
  return NextResponse.json({ destinos });
}
