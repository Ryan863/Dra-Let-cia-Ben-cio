"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Activity,
  HeartHandshake,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

// Interactive Spotlight Card (from 21st-dev-patterns skill)
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-3xl border border-white/10 bg-[#121215]/80 p-8 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#C5A059]/40 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(197, 160, 89, 0.12), transparent 50%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function AboutMethod() {
  const waUrl =
    "https://wa.me/5563992166156?text=" +
    encodeURIComponent(
      "Olá Dra. Letícia Benício! Quero entender mais sobre os diferenciais do Método EndoFIT."
    );

  return (
    <section id="metodo" className="relative py-28 bg-[#09090B] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2B1D14]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#80182E]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C5A059]/30 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5C396]">
              Por Que Escolher a Clínica
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FDFBF7] tracking-tight">
            A revolução do Método EndoFIT & Tecnologia Cirúrgica
          </h2>

          <p className="text-zinc-400 text-base leading-relaxed">
            Diferente das abordagens convencionais, aliamos precisão tridimensional, retração térmica e cuidado humanizado para resultados naturais sem o estigma de procedimentos artificiais.
          </p>
        </div>

        {/* Bento Grid Architecture (21st.dev style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Main Pillar (Span 2 cols) */}
          <SpotlightCard className="md:col-span-2 flex flex-col justify-between group">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C396]">
                <Zap className="w-6 h-6" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#C5A059]/10 text-[#E5C396] text-[11px] font-semibold tracking-wider uppercase">
                Método Autoral
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Método EndoFIT: Fusão entre Lipo HD & Retração a Laser
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Desenvolvido e patenteado pela Dra. Letícia Benício, o EndoFIT atua por meio de microfibras ópticas subdérmicas. Enquanto liquefaz suavemente as células adiposas resistentes, a energia laser estimula instantaneamente a síntese de colágeno, garantindo firmeza cutânea e evitando a flacidez comum das lipoaspirações tradicionais.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Definição muscular anatômica e graciosa</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Estímulo de retração imediata da derme</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Menos dor, inchaço e hematomas</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Recuperação acelerada e pós-operatório sereno</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-white/10 mt-6 relative z-10">
              <span className="text-xs text-[#C5A059] uppercase tracking-wider font-semibold">
                Tecnologia Médica Certificada
              </span>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white hover:text-[#E5C396] font-medium transition-colors"
              >
                <span>Falar com especialista</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>
            </div>
          </SpotlightCard>

          {/* Card 2: Corpo Clínico & Autoridade (Span 1 col) */}
          <SpotlightCard className="flex flex-col justify-between group">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C396]">
                <Activity className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-2xl font-medium text-white">
                Corpo Clínico & Visão Humanizada
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Sob a liderança da Dra. Letícia Benício, cada plano cirúrgico é milimetricamente desenhado de acordo com a biotipologia, proporções ósseas e objetivos individuais da paciente.
              </p>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-zinc-400 space-y-1">
                <p className="font-semibold text-white">Planejamento Anatômico 3D</p>
                <p>Nenhum procedimento é padronizado. Cada linha valoriza sua beleza singular.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 relative z-10">
              <span className="text-xs text-zinc-400">Atendimento personalizado em Palmas</span>
            </div>
          </SpotlightCard>

          {/* Card 3: Estrutura & Segurança (Span 1 col) */}
          <SpotlightCard className="flex flex-col justify-between group">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C396]">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-2xl font-medium text-white">
                Segurança Hospitalar & Rigor
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Instalada no conceituado <strong>Grupo Ana Luíza Duarte</strong>, a clínica oferece equipamentos com certificação sanitária irrestrita, centros esterilizados e monitoramento anestésico completo.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 relative z-10 flex items-center gap-2 text-xs text-[#C5A059]">
              <ShieldCheck className="w-4 h-4" />
              <span>Padrão Ouro em Biossegurança</span>
            </div>
          </SpotlightCard>

          {/* Card 4: Acompanhamento Pós-Procedimento (Span 2 cols) */}
          <SpotlightCard className="md:col-span-2 flex flex-col justify-between group">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C396]">
                <HeartHandshake className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Acolhimento Pós-Procedimento Integral
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                A excelência não termina na sala de procedimento. Nossa equipe de concierges e fisioterapia dermato-funcional acompanha sua evolução diária, fornecendo curativos guiados, drenagens exclusivas e canal direto para suporte 24 horas.
              </p>

              <blockquote className="p-4 rounded-2xl bg-white/[0.03] border-l-2 border-[#C5A059] text-xs sm:text-sm text-zinc-300 italic">
                &ldquo;Fui muito bem atendida e cuidada e continuo sendo muito bem assistida pós procedimento. Muito obrigada pelo carinho e atenção comigo.&rdquo;
                <footer className="text-[11px] text-[#C5A059] font-medium not-italic mt-1.5">
                  — Elizete Zete, paciente verificada no Google Maps (5★)
                </footer>
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 relative z-10 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Canal de suporte direto via WhatsApp</span>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#E5C396] hover:underline font-semibold"
              >
                Conhecer protocolos de suporte →
              </a>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
