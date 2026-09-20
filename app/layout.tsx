import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "PortalViagens — Descubra o mundo",
  description:
    "Um portal de viagens com destinos turísticos incríveis, informações detalhadas e clima em tempo real.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
