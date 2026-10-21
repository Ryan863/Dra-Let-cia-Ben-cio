"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMethod from "@/components/AboutMethod";
import Procedures from "@/components/Procedures";
import RealResults from "@/components/RealResults";
import Reviews from "@/components/Reviews";
import ClinicSpace from "@/components/ClinicSpace";
import LocationSchedule from "@/components/LocationSchedule";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import TrailerModal from "@/components/TrailerModal";

export default function Home() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#09090B] text-[#FDFBF7] relative overflow-x-hidden selection:bg-[#C5A059] selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenConsultation={() => {}} />

      {/* Dobra 1: Hero Section */}
      <Hero onOpenTrailer={() => setIsTrailerOpen(true)} />

      {/* Dobra 2: Por Que Escolher a Clínica & Método EndoFIT */}
      <div id="sobre">
        <AboutMethod />
      </div>

      {/* Dobra 3: Catálogo de Procedimentos e Especialidades */}
      <Procedures />

      {/* Dobra 4: Prova Social & Resultados Reais */}
      <RealResults />

      {/* Dobra 4 (cont.): Avaliações Google Maps 5 Estrelas */}
      <Reviews />

      {/* Dobra 5: O Espaço e a Experiência da Paciente */}
      <ClinicSpace />

      {/* Dobra 6: Localização, Horários e Agendamento */}
      <LocationSchedule />

      {/* Dobra 7: Rodapé Editorial de Luxo */}
      <Footer />

      {/* Interactive Trailer Presentation Modal */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}
