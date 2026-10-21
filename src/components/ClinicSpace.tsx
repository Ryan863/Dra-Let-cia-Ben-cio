"use client";

import Image from "next/image";
import { Sparkles, MapPin, Coffee, Lock, ShieldCheck, HeartHandshake } from "lucide-react";

export default function ClinicSpace() {
  const spaces = [
    {
      title: "Recepção & Lounge de Convivência",
      subtitle: "Travertino, iluminação difusa e aconchego acolhedor",
      image: "/assets/clinica/captura_3.png",
      tag: "Espaço VIP",
      description:
        "Ambiente contemporâneo projetado para desacelerar. Mesas em mármore travertino, luminárias em bronze dourado e serviço de café exclusivo para pacientes e acompanhantes.",
    },
    {
      title: "Entrada Imersiva & Arquitetura Orgânica",
      subtitle: "Pedras naturais e biofilia no Grupo Ana Luíza Duarte",
      image: "/assets/clinica/captura_2.png",
      tag: "Design Editorial",
      description:
        "Portal de entrada estruturado em pedras esculpidas e ânforas em terracota, integrando sofisticação mediterrânea com privacidade total desde o primeiro instante.",
    },
    {
      title: "Consultórios & Suítes de Recuperação",
      subtitle: "Tecnologia médica de ponta e biossegurança total",
      image: "/assets/clinica/hero_editorial_silhouette.jpg",
      tag: "Centro Cirúrgico & Tecnológico",
      description:
        "Salas de avaliação tridimensional equipadas com o sistema laser EndoFIT, maca de alta ergonomia e protocolos de higienização hospitalar rigorosos.",
    },
  ];

  return (
    <section id="espaco" className="relative py-28 bg-[#09090B] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#2B1D14]/30 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C5A059]/30 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5C396]">
              O Espaço & A Experiência
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FDFBF7] tracking-tight">
            Ambiente de Luxo, Conforto & Discrição
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Instalada no prestigioso <strong>Grupo Ana Luíza Duarte</strong>, em Palmas (TO), nossa clínica foi concebida para oferecer privacidade irrestrita, acolhimento caloroso e atendimento sensorial exclusivo.
          </p>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaces.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-[#121215] overflow-hidden flex flex-col justify-between group hover:border-[#C5A059]/40 transition-all duration-500 shadow-xl"
            >
              <div className="relative aspect-[4/3.5] w-full overflow-hidden bg-black/60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-wider text-[#E5C396]">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#E5C396] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#C5A059] font-medium mt-1">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Highlights */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C396] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Privacidade VIP</div>
              <div className="text-[11px] text-zinc-400">Atendimento reservado</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C396] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Biossegurança</div>
              <div className="text-[11px] text-zinc-400">Padrão hospitalar ouro</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C396] shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Concierge & Café</div>
              <div className="text-[11px] text-zinc-400">Conforto sensorial</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C396] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Palmas - TO</div>
              <div className="text-[11px] text-zinc-400">Localização central nobre</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
