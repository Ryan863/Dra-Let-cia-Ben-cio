"use client";

import { MessageCircle, Sparkles } from "lucide-react";

export default function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/5563992166156?text=" +
    encodeURIComponent(
      "Olá Dra. Letícia Benício! Gostaria de agendar uma consulta de avaliação personalizada."
    );

  return (
    <aside
      aria-label="Atendimento WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-6 duration-700"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center h-14 px-4 sm:px-6 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-800 text-white rounded-full shadow-2xl shadow-emerald-500/35 border border-emerald-400/30 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Pulsing attention ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-[#09090b]" />
        </span>

        <MessageCircle className="w-5 h-5 sm:mr-2.5 shrink-0 stroke-[2.2]" />
        
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-semibold text-xs tracking-wider uppercase leading-tight">
            Agendar Consulta
          </span>
          <span className="text-[10px] text-emerald-100 font-normal opacity-90">
            Dra. Letícia Benício
          </span>
        </div>
      </a>
    </aside>
  );
}
