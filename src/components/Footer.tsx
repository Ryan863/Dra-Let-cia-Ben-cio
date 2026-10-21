"use client";

import Image from "next/image";
import { MessageCircle, MapPin, Sparkles, ArrowUp } from "lucide-react";

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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const waUrl =
    "https://wa.me/5563992166156?text=" +
    encodeURIComponent("Olá Dra. Letícia Benício! Gostaria de falar com a clínica.");

  return (
    <footer className="relative bg-[#070709] border-t border-white/10 pt-20 pb-12 overflow-hidden text-zinc-400 text-xs">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C5A059]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C5A059]/40 shadow-lg shadow-[#C5A059]/10">
                <Image
                  src="/assets/clinica/Lb_full.jpg"
                  alt="Logo Dra Letícia Benício"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl tracking-widest font-semibold text-[#FDFBF7] uppercase block">
                  Dra. Letícia Benício
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-medium">
                  Estética Avançada • Método EndoFIT
                </span>
              </div>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">
              Cirurgia de contorno corporal de alta definição, tecnologia a laser para retração dérmica e protocolos individualizados para resultados refinados e naturais.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/draleticiabenicio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dra Letícia Benício"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059]/20 border border-white/10 hover:border-[#C5A059] text-zinc-300 hover:text-[#E5C396] flex items-center justify-center transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Dra Letícia Benício"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059]/20 border border-white/10 hover:border-[#C5A059] text-zinc-300 hover:text-[#E5C396] flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://www.google.com/maps/place/Grupo+Ana+Lu%C3%ADza+Duarte/@-10.2145248,-48.3491638,17z"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps da Clínica"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059]/20 border border-white/10 hover:border-[#C5A059] text-zinc-300 hover:text-[#E5C396] flex items-center justify-center transition-all"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sobre" className="hover:text-[#E5C396] transition-colors">
                  A Clínica & Filosofia
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-[#E5C396] transition-colors">
                  O Método EndoFIT
                </a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-[#E5C396] transition-colors">
                  Catálogo de Procedimentos
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-[#E5C396] transition-colors">
                  Galeria de Resultados Reais
                </a>
              </li>
              <li>
                <a href="#espaco" className="hover:text-[#E5C396] transition-colors">
                  O Espaço no Grupo Ana Luíza Duarte
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#E5C396] transition-colors">
                  Avaliações no Google Maps (5★)
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#E5C396] transition-colors">
                  Localização & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Unidade de Atendimento
            </h4>
            <div className="space-y-2 leading-relaxed text-zinc-300">
              <p>
                <strong className="text-white">Grupo Ana Luíza Duarte</strong>
              </p>
              <p>403 Sul Al, 10 - Qi, 27 - Lt 51</p>
              <p>Plano Diretor Sul, Palmas - TO, 77015-561</p>
              <p className="pt-2 text-zinc-400">
                Atendimento: Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00
              </p>
              <p className="pt-1">
                WhatsApp:{" "}
                <a href={waUrl} className="text-[#E5C396] hover:underline font-semibold">
                  (63) 99216-6156
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rights & CFM Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © 2026 Dra. Letícia Benício - Estética Avançada. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Palmas - Tocantins</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#E5C396] transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
