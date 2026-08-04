import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Beneficios from "@/components/Beneficios";
import Produtos from "@/components/Produtos";
import Diferenciais from "@/components/Diferenciais";
import ComoFunciona from "@/components/ComoFunciona";
import Sobre from "@/components/Sobre";
import Depoimentos from "@/components/Depoimentos";
import Unidades from "@/components/Unidades";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Beneficios />
        <Produtos />
        <Diferenciais />
        <ComoFunciona />
        <Sobre />
        <Depoimentos />
        <Unidades />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
