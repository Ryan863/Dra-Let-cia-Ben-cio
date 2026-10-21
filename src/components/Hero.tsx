"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Play,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight,
  MapPin,
  Star,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface HeroProps {
  onOpenTrailer: () => void;
}

export default function Hero({ onOpenTrailer }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const waUrl =
    "https://wa.me/5563992166156?text=" +
    encodeURIComponent(
      "Olá Dra. Letícia Benício! Gostaria de agendar uma avaliação para o Método EndoFIT / Lipo HD."
    );

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".hero-title-line",
          {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
          },
          "-=0.4"
        )
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-cta-btn",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-portrait-wrap",
          {
            scale: 0.95,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=1"
        )
        .from(
          ".hero-ring",
          {
            scale: 0.7,
            opacity: 0,
            stagger: 0.08,
            duration: 1.2,
          },
          "-=1.1"
        )
        .from(
          ".hero-stat-badge",
          {
            y: 20,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          bottomBarRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#09090B] overflow-hidden flex flex-col justify-between pt-28 pb-4 lg:pt-32"
    >
      {/* Background Studio Lighting & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm burgundy / amber studio light - matching Reference Image 1 */}
        <div className="absolute top-1/4 right-[5%] w-[650px] h-[650px] bg-gradient-to-br from-[#80182E]/35 via-[#4A1525]/20 to-transparent rounded-full blur-[140px]" />
        {/* Warm champagne / bronze glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[160px]" />
        {/* Soft vignette overlay */}
        <div className="absolute inset-0 bg-radial-luxury pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div
        ref={heroContentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 my-auto"
      >
        {/* Left Column: Editorial Typography & Conversion */}
        <div className="w-full lg:max-w-2xl text-left space-y-6">
          {/* Eyebrow Pill */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C5A059]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E5C396]">
              Estética Avançada • Método EndoFIT
            </span>
          </div>

          {/* H1 Title - Editorial Impact */}
          <div className="space-y-1">
            <h1 className="hero-title-line font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#FDFBF7] leading-[1.08]">
              Harmonia entre arte, precisão & naturalidade.
            </h1>
            <p className="hero-title-line text-sm sm:text-base tracking-[0.25em] uppercase text-[#C5A059] font-medium pt-2">
              Dra. Letícia Benício • Palmas - TO
            </p>
          </div>

          {/* Subtitle */}
          <p className="hero-desc text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            Protocolos personalizados em <span className="text-white font-medium">Lipo HD</span>, remodelamento corporal e retração tecidual profunda. Conheça a evolução estética da lipoaspiração moderna com tecnologia a laser e atendimento exclusivo no prestigiado <span className="text-[#E5C396] font-medium">Grupo Ana Luíza Duarte</span>.
          </p>

          {/* Action Pill Buttons (Inspired by Image 1) */}
          <div className="hero-cta-btn flex flex-wrap items-center gap-4 pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-cta"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#A37B30] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#C5A059]/25 hover:shadow-2xl hover:shadow-[#C5A059]/40 hover:scale-[1.02] active:scale-98 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-black/20" />
              <span>Agendar Avaliação Personalizada</span>
              <span className="text-black/70 text-xs font-bold leading-none">• •</span>
            </a>

            <a
              href="#procedimentos"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-[#C5A059]/60 text-[#FDFBF7] font-medium text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-98"
            >
              <span>Conhecer Procedimentos</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </a>
          </div>

          {/* Floating Metric Badges */}
          <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg border-t border-white/10">
            <div className="hero-stat-badge p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#E5C396]">+1.500</div>
              <div className="text-[10px] sm:text-xs text-zinc-400 font-normal leading-tight mt-0.5">Procedimentos Realizados</div>
            </div>
            <div className="hero-stat-badge p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#E5C396]">EndoFIT</div>
              <div className="text-[10px] sm:text-xs text-zinc-400 font-normal leading-tight mt-0.5">Método Autoral Criado</div>
            </div>
            <div className="hero-stat-badge p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#E5C396] flex items-center gap-1">
                5.0 <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 font-normal leading-tight mt-0.5">Nota Máxima no Google</div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Visual with Concentric Radiating Rings (Reference Image 1) */}
        <div className="relative w-full lg:w-[480px] xl:w-[540px] flex items-center justify-center">
          {/* Concentric rings radiating behind the model - Direct Reference Image 1 Match */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="hero-ring w-[280px] h-[280px] rounded-full border border-[#C5A059]/20" />
            <div className="hero-ring w-[380px] h-[380px] rounded-full border border-[#C5A059]/15" />
            <div className="hero-ring w-[480px] h-[480px] rounded-full border border-[#C5A059]/10" />
            <div className="hero-ring w-[580px] h-[580px] rounded-full border border-white/[0.04]" />
            <div className="hero-ring w-[680px] h-[680px] rounded-full border border-white/[0.02]" />
          </div>

          {/* Model Portrait Container */}
          <div className="hero-portrait-wrap relative w-[300px] sm:w-[380px] lg:w-[430px] aspect-[4/5] rounded-[36px] overflow-hidden border border-[#C5A059]/30 shadow-2xl shadow-black/80 bg-gradient-to-b from-white/10 to-black/60 group">
            <Image
              src="/assets/clinica/hero_editorial_portrait.jpg"
              alt="Dra. Letícia Benício - Estética Avançada Editorial"
              fill
              priority
              sizes="(max-width: 768px) 300px, 430px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Editorial Glass Card Badge Over Image */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#E5C396] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                    Padrão Editorial
                  </div>
                  <div className="text-sm font-medium text-white mt-0.5">
                    Resultados harmônicos & sem estigmas
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/50 flex items-center justify-center text-[#E5C396]">
                  <Award className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Exact Lumident & Reference Image 1 Layout */}
      <div
        ref={bottomBarRef}
        className="relative z-20 w-full mt-10 border-t border-white/10 bg-black/40 backdrop-blur-xl py-4 sm:py-5"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Item 1: Play Trailer Button */}
          <button
            onClick={onOpenTrailer}
            className="flex items-center gap-3.5 group cursor-pointer text-left w-full md:w-auto hover:opacity-90 transition-opacity"
            aria-label="Assistir apresentação do Método EndoFIT"
          >
            <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/20 flex items-center justify-center text-white group-hover:text-[#E5C396] transition-all duration-300 shadow-md">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#E5C396] transition-colors">
                CONHEÇA O MÉTODO
              </div>
              <div className="text-[11px] text-zinc-400">
                Apresentação clínica EndoFIT
              </div>
            </div>
          </button>

          {/* Item 2 & 3: Numbered Insight Cards (Reference Image 1 direct feature) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto flex-1 max-w-2xl">
            {/* Pillar 01 */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="w-6 h-6 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E5C396] text-xs font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                <strong className="text-white font-medium">Lipo HD & Retração de Pele:</strong> Remoção de gordura com definição anatômica e estímulo de colágeno sem exageros.
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="w-6 h-6 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E5C396] text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                <strong className="text-white font-medium">Grupo Ana Luíza Duarte:</strong> Estrutura hospitalar premium em Palmas (TO) com acompanhamento pós-procedimento.
              </p>
            </div>
          </div>

          {/* Item 4: Social Icons on Right (Matching Image 1) */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://www.instagram.com/draleticiabenicio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Dra Letícia Benício"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C5A059] hover:bg-[#C5A059]/20 flex items-center justify-center text-zinc-300 hover:text-[#E5C396] transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Dra Letícia Benício"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C5A059] hover:bg-[#C5A059]/20 flex items-center justify-center text-zinc-300 hover:text-[#E5C396] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href="https://www.google.com/maps/place/Grupo+Ana+Lu%C3%ADza+Duarte/@-10.2145248,-48.3491638,17z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps da Clínica"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C5A059] hover:bg-[#C5A059]/20 flex items-center justify-center text-zinc-300 hover:text-[#E5C396] transition-all"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
