"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "A Clínica", href: "#sobre" },
    { label: "Método EndoFIT", href: "#metodo" },
    { label: "Procedimentos", href: "#procedimentos" },
    { label: "Resultados", href: "#resultados" },
    { label: "O Espaço", href: "#espaco" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Localização", href: "#localizacao" },
  ];

  const waUrl = "https://wa.me/5563992166156?text=" + encodeURIComponent("Olá Dra. Letícia Benício! Gostaria de agendar uma avaliação personalizada.");

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#09090b]/85 backdrop-blur-xl border-b border-[#C5A059]/20 shadow-2xl py-3.5"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C5A059]/40 group-hover:border-[#C5A059] transition-all duration-300 shadow-lg shadow-[#C5A059]/10">
              <Image
                src="/assets/clinica/Lb_full.jpg"
                alt="Logo Dra Letícia Benício"
                fill
                sizes="40px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-widest font-semibold text-[#FDFBF7] uppercase leading-none group-hover:text-[#E5C396] transition-colors">
                Dra. Letícia Benício
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase mt-1 font-medium flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> Estética Avançada & Lipo HD
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-wider text-zinc-300 hover:text-[#E5C396] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Menu Pill */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#C5A059]/15 to-[#876228]/25 hover:from-[#C5A059]/30 hover:to-[#876228]/40 border border-[#C5A059]/40 hover:border-[#C5A059] text-[#FDFBF7] backdrop-blur-md transition-all duration-300 shadow-lg shadow-[#C5A059]/10 active:scale-95 group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C5A059] group-hover:rotate-12 transition-transform" />
              <span>Agendar Avaliação</span>
              <span className="text-[#C5A059] text-xs font-bold leading-none">• •</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full border border-white/10 hover:border-[#C5A059]/50 bg-white/5 backdrop-blur-md text-white transition-all"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#09090b]/95 backdrop-blur-2xl flex flex-col justify-center px-8 py-16 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
            <div className="text-center mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#C5A059]/40 mx-auto mb-3">
                <Image
                  src="/assets/clinica/Lb_full.jpg"
                  alt="Logo Dra Letícia Benício"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <h2 className="font-serif text-xl text-white">Dra. Letícia Benício</h2>
              <p className="text-xs text-[#C5A059] tracking-widest uppercase mt-1">
                Método EndoFIT • Palmas TO
              </p>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A059]/40 text-base font-medium text-zinc-200 hover:text-[#E5C396] transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
                </a>
              ))}
            </nav>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#C5A059] to-[#876228] text-black font-semibold text-sm tracking-wider uppercase shadow-xl shadow-[#C5A059]/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
