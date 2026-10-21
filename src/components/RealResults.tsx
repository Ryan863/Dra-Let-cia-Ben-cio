"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Eye,
  Info,
} from "lucide-react";

interface ResultCase {
  id: number;
  title: string;
  category: string;
  technique: string;
  highlight: string;
  image: string;
  description: string;
}

export default function RealResults() {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const cases: ResultCase[] = [
    {
      id: 0,
      title: "Transformação Abdominal & Definição Cintura",
      category: "Método EndoFIT",
      technique: "Endolaser + Lipoescultura Anatômica",
      highlight: "Retração acentuada de flacidez e afunilamento de cintura",
      image: "/assets/clinica/captura_1.png",
      description:
        "Caso com retração dérmica significativa na região periumbilical e definição das transições laterais do abdômen, preservando a harmonia feminina.",
    },
    {
      id: 1,
      title: "Contorno Lateral & Retração de Flancos",
      category: "Lipo HD de Perfil",
      technique: "Lipoescultura Tridimensional",
      highlight: "Alinhamento do perfil e redução de adiposidade localizada",
      image: "/assets/clinica/resultado_1.jpg",
      description:
        "Visão em perfil demonstrando a redução completa do volume abdominal anterior e melhora expressiva da postura e contorno corporal.",
    },
    {
      id: 2,
      title: "Tônus Muscular & Firmeza Cutânea",
      category: "Retração Cutânea",
      technique: "EndoFIT Subdérmico",
      highlight: "Realce dos músculos retos abdominais com pele firme",
      image: "/assets/clinica/resultado_3.jpg",
      description:
        "Definição elegante da linha alba e semilunar através de bioestimulação colagênica profunda, sem aspecto exagerado.",
    },
    {
      id: 3,
      title: "Harmonização de Cintura e Projeção Glútea",
      category: "Remodelamento Glúteo",
      technique: "Lipoenxertia Estruturada",
      highlight: "Transição suave entre curvatura lombar e bumbum",
      image: "/assets/clinica/resultado_4.jpg",
      description:
        "Harmonização da silhueta em perfil com afunilamento da transição lombar e projeção glútea natural.",
    },
  ];

  const current = cases[selectedCase];

  const waUrl =
    "https://wa.me/5563992166156?text=" +
    encodeURIComponent(
      `Olá Dra. Letícia Benício! Vi os resultados reais no site (${current.title}) e gostaria de avaliar meu caso.`
    );

  return (
    <section id="resultados" className="relative py-28 bg-[#09090B] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#80182E]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C5A059]/30 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5C396]">
              Portfólio Clínico Autêntico
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FDFBF7] tracking-tight">
            Resultados Reais & Casos Transformadores
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Fotografias autênticas de procedimentos realizados pela Dra. Letícia Benício. Cada paciente possui um plano anatômico sob medida, focado em elegância, tônus e ausência de exageros.
          </p>
        </div>

        {/* Interactive Showcase Box */}
        <div className="rounded-3xl border border-white/10 bg-[#121215]/90 backdrop-blur-xl p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Viewer */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/4.5] sm:aspect-[4/3.8] rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-black/80 shadow-2xl group">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-contain object-center p-2"
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white">
                  <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Antes & Depois Oficial</span>
                </div>

                {/* Quick Switch Buttons */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    onClick={() =>
                      setSelectedCase((prev) =>
                        prev === 0 ? cases.length - 1 : prev - 1
                      )
                    }
                    className="w-10 h-10 rounded-full bg-black/70 hover:bg-[#C5A059] text-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                    aria-label="Caso anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedCase((prev) =>
                        prev === cases.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="w-10 h-10 rounded-full bg-black/70 hover:bg-[#C5A059] text-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                    aria-label="Próximo caso"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Case Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E5C396] text-[11px] font-semibold uppercase tracking-wider">
                  {current.category}
                </span>
                <span className="text-xs text-zinc-400">
                  Caso {selectedCase + 1} de {cases.length}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  {current.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#C5A059] font-medium">
                  Técnica: {current.technique}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                  Destaque Clínico
                </div>
                <div className="text-sm text-white font-medium">
                  {current.highlight}
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {current.description}
              </p>

              {/* Case Selectors */}
              <div className="space-y-2 pt-2">
                <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  Selecione outro caso para visualizar:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {cases.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCase(i)}
                      className={`p-2.5 rounded-xl text-left text-xs transition-all border cursor-pointer ${
                        selectedCase === i
                          ? "bg-[#C5A059]/20 border-[#C5A059] text-white font-semibold"
                          : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="truncate">{c.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#C5A059] to-[#876228] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#C5A059]/20 hover:scale-[1.01] active:scale-98 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quero Avaliar Meu Caso no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Ethics Disclaimer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3 text-zinc-500 text-[11px] leading-relaxed">
            <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <p>
              <strong>Nota Ética e Esclarecimento Médico:</strong> As imagens apresentadas são registros autênticos de pacientes submetidos a procedimentos pela Dra. Letícia Benício. Conforme determinação do Conselho Federal de Medicina (CFM), os resultados são individuais e variam de acordo com o biotipo, resposta biológica tecidual e adesão aos cuidados pós-operatórios. Fotos com autorização expressa em termo de consentimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
