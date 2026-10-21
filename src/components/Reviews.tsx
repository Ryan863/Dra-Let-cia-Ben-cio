"use client";

import { useState } from "react";
import { Star, ShieldCheck, MessageCircle, ExternalLink, Quote, Sparkles } from "lucide-react";

interface Review {
  name: string;
  role: string;
  time: string;
  text: string;
  stars: number;
  highlight?: string;
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      name: "Elizete Zete",
      role: "Paciente Verificada",
      time: "3 semanas atrás",
      stars: 5,
      highlight: "Acompanhamento pós-procedimento contínuo",
      text: "Pessoa maravilhosa junto com sua equipe. Fui muito bem atendida e cuidada e continuo sendo muito bem assistida pós procedimento. Muito obrigada pelo carinho e atenção para comigo.",
    },
    {
      name: "Patrícia Freitas",
      role: "Paciente Verificada",
      time: "1 mês atrás",
      stars: 5,
      highlight: "Equipe carinhosa & Dra. criteriosa",
      text: "Atendimento maravilhoso, toda a equipe super atenciosa, trata o paciente com muita cordialidade e simpatia, em especial a Lorena com todo seu cuidado e carinho. Dra Letícia um amor, super criteriosa com seu trabalho, atendimento de excelência!",
    },
    {
      name: "Ronelia Reis",
      role: "Paciente Verificada",
      time: "6 meses atrás",
      stars: 5,
      highlight: "Procedimento super tranquilo • Nota 1.000",
      text: "Atendimento de qualidade e excelência. Procedimento super tranquilo. Farei em outras regiões do corpo, com certeza. A Dra. super atenciosa e esclareceu todas as minhas dúvidas com relação ao procedimento. Nota 1.000!",
    },
    {
      name: "Anne Karolina Rafael Vargas",
      role: "Paciente Verificada",
      time: "3 semanas atrás",
      stars: 5,
      highlight: "Super humana e dedicada",
      text: "Excelente atendimento, uma pessoa super humana, profissional, dedicada, um amor de pessoa!",
    },
    {
      name: "Alex",
      role: "Paciente Verificado",
      time: "9 meses atrás",
      stars: 5,
      highlight: "Excelência técnica comprovada",
      text: "Excelência no atendimento e no procedimento. Recomendo!",
    },
    {
      name: "Hugo Luiz",
      role: "Paciente Verificado",
      time: "3 anos atrás",
      stars: 5,
      highlight: "Atenciosa e detalhista",
      text: "Ótima profissional! Atenciosa e detalhista!",
    },
    {
      name: "Jessica Lorayne Souza",
      role: "Paciente Verificada",
      time: "3 meses atrás",
      stars: 5,
      highlight: "Super indico",
      text: "Excelente profissional, super indico!",
    },
    {
      name: "Kaio Erlyn",
      role: "Paciente Verificado",
      time: "3 anos atrás",
      stars: 5,
      highlight: "Serviço de altíssima qualidade",
      text: "Atendimento excelente e o serviço de qualidade.",
    },
  ];

  const mapsUrl =
    "https://www.google.com/maps/place/Grupo+Ana+Lu%C3%ADza+Duarte/@-10.2145248,-48.3491638,17z";

  return (
    <section id="avaliacoes" className="relative py-28 bg-[#0C0C0E] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C5A059]/30 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5C396]">
                Prova Social & Avaliações Reais
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FDFBF7] tracking-tight">
              A Experiência Contada Por Nossos Pacientes
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Depoimentos autênticos extraídos diretamente do Google Maps. Segurança, acolhimento desde a primeira consulta e acompanhamento pós-procedimento que transforma vidas.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-5 rounded-3xl bg-[#141418] border border-[#C5A059]/30 backdrop-blur-md flex items-center gap-5 shrink-0 shadow-xl">
            <div className="text-center pr-5 border-r border-white/10">
              <div className="font-serif text-4xl font-bold text-[#E5C396]">5.0</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white font-semibold">
                Google Reviews
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                100% Avaliações 5 Estrelas
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#C5A059] hover:underline font-semibold mt-1"
              >
                <span>Verificar no Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-[#121215]/80 border border-white/10 hover:border-[#C5A059]/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-white/10 group-hover:text-[#C5A059]/40 transition-colors" />
                </div>

                {rev.highlight && (
                  <div className="text-xs text-[#E5C396] font-semibold tracking-wide">
                    &ldquo;{rev.highlight}&rdquo;
                  </div>
                )}

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">{rev.name}</div>
                  <div className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
                    <span>{rev.role}</span>
                  </div>
                </div>
                <div className="text-[10px] text-zinc-500 font-medium">{rev.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#18181D] via-[#1F1F24] to-[#18181D] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
              Pronta para viver a sua transformação com segurança e acolhimento?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Agende sua consulta de avaliação diretamente com nossa equipe no WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/5563992166156?text=Olá%20Dra.%20Letícia%20Benício!%20Li%20os%20depoimentos%20e%20gostaria%20de%20agendar%20uma%20avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#876228] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02] active:scale-98 transition-all shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
}
