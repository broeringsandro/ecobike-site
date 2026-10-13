const PHONE = "5548984558493";

export const wa = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const WA_GERAL = wa("Olá! Tenho interesse nas scooters da EcoBike.");
export const WA_RIDE = wa("Olá! Gostaria de agendar um Test Ride na EcoBike.");
export const WA_LOJA = wa("Olá! Quero visitar uma loja EcoBike.");
export const WA_DUVIDA = wa("Olá! Tenho uma dúvida sobre as scooters EcoBike.");

export const INSTAGRAM = "https://instagram.com/ecobikeeletricscooters";

export const navLinks = [
  { label: "Modelos", href: "#produtos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Lojas", href: "#unidades" },
  { label: "FAQ", href: "#faq" },
];

export const unidades = [
  {
    cidade: "Palhoça",
    rua: "Avenida Bom Jesus de Nazaré, 547",
    bairro: "Aririú",
    uf: "Palhoça, SC",
    maps: "https://maps.google.com/?q=Avenida+Bom+Jesus+de+Nazar%C3%A9+547+Ariri%C3%BA+Palho%C3%A7a+SC",
    embed:
      "https://maps.google.com/maps?q=Avenida+Bom+Jesus+de+Nazar%C3%A9%2C+547%2C+Ariri%C3%BA%2C+Palho%C3%A7a%2C+SC&output=embed&hl=pt-BR&z=16",
  },
  {
    cidade: "Santo Amaro da Imperatriz",
    rua: "Rua Pedro Mansur Elias, 45",
    bairro: "Centro",
    uf: "Santo Amaro da Imperatriz, SC",
    maps: "https://maps.google.com/?q=Rua+Pedro+Mansur+Elias+45+Centro+Santo+Amaro+da+Imperatriz+SC",
    embed:
      "https://maps.google.com/maps?q=Rua+Pedro+Mansur+Elias%2C+45%2C+Centro%2C+Santo+Amaro+da+Imperatriz%2C+SC&output=embed&hl=pt-BR&z=16",
  },
];
