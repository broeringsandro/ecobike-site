import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

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
    "Scooters e bicicletas elétricas com assistência técnica própria, garantia oficial e entrega. Duas lojas em Santa Catarina. Não precisa de CNH.",
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

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

// Hide reveal targets before first paint (only when motion is allowed)
const preScript = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('anim')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preScript }} />
      </head>
      <body className="grain">
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
