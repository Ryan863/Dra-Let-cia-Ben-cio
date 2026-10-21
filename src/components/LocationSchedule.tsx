"use client";

import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  MessageCircle,
  Sparkles,
  ExternalLink,
  CalendarCheck,
} from "lucide-react";

export default function LocationSchedule() {
  const address =
    "Grupo Ana Luíza Duarte // 403 Sul Al, 10 - Qi, 27 - Lt 51 - Plano Diretor Sul, Palmas - TO, 77015-561";

  const mapsPlaceUrl =
    "https://www.google.com/maps/place/Grupo+Ana+Lu%C3%ADza+Duarte/@-10.2145248,-48.3491638,17z/data=!3m1!4b1!4m6!3m5!1s0x933b35e1a6b94ded:0xdb317b5682a9c26f!8m2!3d-10.2145248!4d-48.3465889!16s%2Fg%2F11swzw2g1_";

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

  const waUrl =
    "https://wa.me/5563992166156?text=" +
    encodeURIComponent(
      "Olá Dra. Letícia Benício! Gostaria de agendar uma consulta de avaliação no Grupo Ana Luíza Duarte em Palmas."
    );

  const schedule = [
    { day: "Segunda-feira", hours: "08:00 – 18:00", active: true },
    { day: "Terça-feira", hours: "08:00 – 18:00", active: true },
    { day: "Quarta-feira", hours: "08:00 – 18:00", active: true },
    { day: "Quinta-feira", hours: "08:00 – 18:00", active: true },
    { day: "Sexta-feira", hours: "08:00 – 18:00", active: true },
    { day: "Sábado", hours: "08:00 – 12:00", active: true },
    { day: "Domingo", hours: "Fechado", active: false },
  ];

  return (
    <section id="localizacao" className="relative py-28 bg-[#0C0C0E] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C5A059]/30 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5C396]">
              Atendimento & Endereço
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FDFBF7] tracking-tight">
            Localização Nobre & Horários de Consulta
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Consulte a Dra. Letícia Benício com hora marcada em um dos endereços mais sofisticados do Plano Diretor Sul de Palmas (TO). Estacionamento privativo e acesso descomplicado.
          </p>
        </div>

        {/* Location & Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address & Hours Card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141418] border border-white/10 hover:border-[#C5A059]/40 transition-all shadow-xl space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E5C396] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
                    Grupo Ana Luíza Duarte
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#C5A059] font-medium mt-1">
                    Plano Diretor Sul • Palmas - TO
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                403 Sul Al, 10 - Qi, 27 - Lt 51 - Plano Diretor Sul, Palmas - TO, CEP 77015-561
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs uppercase tracking-wider font-semibold text-white transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4 text-[#C5A059]" />
                  <span>Traçar Rota GPS</span>
                </a>

                <a
                  href={mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-transparent hover:bg-white/5 border border-white/10 text-xs text-zinc-300 hover:text-white transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Ver no Maps</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C5A059]" />
                <h4 className="font-serif text-lg font-medium text-white">
                  Horários de Funcionamento
                </h4>
              </div>

              <div className="space-y-2 text-xs">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-white/[0.06] last:border-b-0"
                  >
                    <span className="text-zinc-400 font-medium">{item.day}</span>
                    <span
                      className={`font-semibold ${
                        item.active ? "text-zinc-100" : "text-rose-400/80"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Embedded Map & WhatsApp Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-[#141418] flex-1 min-h-[380px] relative">
              <iframe
                title="Localização Dra Letícia Benício - Grupo Ana Luíza Duarte Palmas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.8377755355677!2d-48.3491638!3d-10.2145248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b35e1a6b94ded%3A0xdb317b5682a9c26f!2sGrupo%20Ana%20Lu%C3%ADza%20Duarte!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[360px]"
              />

              {/* Map floating card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#09090b]/85 backdrop-blur-xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs text-zinc-200">
                    Consultório atendendo em horário comercial
                  </span>
                </div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#876228] text-black text-xs font-semibold uppercase tracking-wider shadow-lg shadow-[#C5A059]/20"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Consultar Horários Disponíveis</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400">
                    WhatsApp & Agendamento
                  </div>
                  <div className="text-sm font-semibold text-white">
                    (63) 99216-6156
                  </div>
                </div>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com a Recepção</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
