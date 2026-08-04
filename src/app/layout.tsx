import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoBike | Scooters e Bicicletas Elétricas em Palhoça e Santo Amaro",
  description:
    "Conheça scooters e bicicletas elétricas com assistência técnica própria, garantia oficial e entrega. Duas lojas em Santa Catarina. Não precisa de CNH.",
  keywords:
    "scooter elétrica, bicicleta elétrica, EcoBike, Palhoça, Santo Amaro da Imperatriz, mobilidade elétrica, sem CNH, autopropelida",
  authors: [{ name: "EcoBike" }],
  openGraph: {
    title: "EcoBike | Scooters e Bicicletas Elétricas em Santa Catarina",
    description:
      "Mobilidade elétrica inteligente. Scooters e e-bikes sem CNH, com assistência técnica própria e garantia oficial.",
    locale: "pt_BR",
    type: "website",
    siteName: "EcoBike",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
