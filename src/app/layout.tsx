import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://draleticiabenicio.com.br"),
  title: "Dra. Letícia Benício | Estética Avançada & Lipo HD - Palmas TO",
  description: "Clínica de Estética Avançada e Cirurgia Plástica de Alto Padrão em Palmas - TO. Criadora do Método EndoFIT, especialista em Lipo HD, remodelamento corporal e retração de pele com tecnologia médica de ponta.",
  keywords: [
    "Dra Letícia Benício",
    "Lipo HD Palmas",
    "Método EndoFIT",
    "Lipoescultura Palmas TO",
    "Retração de pele",
    "Estética Avançada Palmas",
    "Grupo Ana Luíza Duarte",
    "Tratamento de flacidez",
    "Harmonização Glútea",
    "Cirurgia Plástica Palmas"
  ],
  authors: [{ name: "Dra. Letícia Benício" }],
  openGraph: {
    title: "Dra. Letícia Benício | Estética Avançada & Lipo HD",
    description: "A harmonia perfeita entre arte cirúrgica, precisão milimétrica e naturalidade. Conheça o Método EndoFIT no Grupo Ana Luíza Duarte em Palmas - TO.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/clinica/Lb_full.jpg",
        width: 800,
        height: 800,
        alt: "Dra. Letícia Benício - Estética Avançada & Lipo HD",
      },
    ],
  },
  icons: {
    icon: "/assets/clinica/Lb_full.jpg",
    apple: "/assets/clinica/Lb_full.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Dra. Letícia Benício - Estética Avançada",
    image: "https://draleticiabenicio.com.br/assets/clinica/Lb_full.jpg",
    telephone: "+55-63-99216-6156",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Grupo Ana Luíza Duarte // 403 Sul Al, 10 - Qi, 27 - Lt 51 - Plano Diretor Sul",
      addressLocality: "Palmas",
      addressRegion: "TO",
      postalCode: "77015-561",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -10.2145248,
      longitude: -48.3465889,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/draleticiabenicio/",
      "https://www.google.com/maps/place/Grupo+Ana+Lu%C3%ADza+Duarte/@-10.2145248,-48.3491638,17z"
    ],
    priceRange: "$$$$",
  };

  return (
    <html lang="pt-BR" className={`${playfair.variable} ${jakarta.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090B] text-[#FDFBF7] antialiased min-h-screen font-sans selection:bg-[#C5A059] selection:text-black">
        {children}
      </body>
    </html>
  );
}
