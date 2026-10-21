"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Sparkles, CheckCircle2, MessageCircle, Play, ShieldCheck, Zap } from "lucide-react";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrailerModal({ isOpen, onClose }: TrailerModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const waUrl =
    "https://wa.me/5563992166156?text=" +
    encodeURIComponent(
      "Olá Dra. Letícia Benício! Assisti à apresentação do Método EndoFIT e quero agendar minha avaliação."
    );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl bg-[#121215] border border-[#C5A059]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#E5C396]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                Apresentação Clínica: Método EndoFIT
              </h3>
              <p className="text-[11px] text-[#C5A059] uppercase tracking-widest font-semibold">
                Dra. Letícia Benício • Inovação em Contorno Corporal
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Visual Showcase Banner */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-black/80 flex items-center justify-center group">
            <Image
              src="/assets/clinica/hero_editorial_silhouette.jpg"
              alt="Apresentação Método EndoFIT"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Simulated interactive video badge */}
            <div className="relative z-10 text-center space-y-3 p-6 max-w-lg">
              <div className="w-16 h-16 rounded-full bg-[#C5A059] text-black flex items-center justify-center mx-auto shadow-xl shadow-[#C5A059]/40 animate-pulse">
                <Zap className="w-8 h-8 fill-black" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-white font-medium">
                EndoFIT: A Síntese da Alta Definição
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Tecnologia subdérmica a laser para retração tecidual imediata, lipomodelagem precisa e estímulo de colágeno sem estigmas cirúrgicos.
              </p>
            </div>
          </div>

          {/* Pillars of Method */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#E5C396] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                Fase 1: Liquefação Laser
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                As células de gordura são liquefeitas suavemente, facilitando a remoção com trauma tecidual mínimo e menos hematomas.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#E5C396] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                Fase 2: Retração Cutânea
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                O calor térmico controlado age diretamente nos septos conjuntivos, colando a pele aos músculos e eliminando flacidez.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#E5C396] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                Fase 3: Recuperação Acelerada
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Protocolo pós-operatório com fisioterapia especializada no Grupo Ana Luíza Duarte, permitindo retorno rápido à rotina.
              </p>
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#18181D] to-[#251A14] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-semibold text-white">
                Deseja saber se você tem indicação para o EndoFIT?
              </div>
              <div className="text-xs text-zinc-400">
                Avaliação presencial exclusiva com a Dra. Letícia Benício em Palmas - TO.
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A059] to-[#876228] text-black font-semibold text-xs uppercase tracking-wider shadow-lg shadow-[#C5A059]/20 hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Avaliação</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
