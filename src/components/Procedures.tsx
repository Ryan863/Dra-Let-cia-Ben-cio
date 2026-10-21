"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Clock,
  ShieldCheck,
  Check,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

interface ProcedureItem {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  description: string;
  benefits: string[];
  recovery: string;
  indication: string;
  image: string;
}

export default function Procedures() {
  const [activeTab, setActiveTab] = useState<string>("lipo-hd");

  const procedures: ProcedureItem[] = [
    {
      id: "lipo-hd",
      name: "Lipoaspiração de Alta Definição (Lipo HD & EndoFIT)",
      subtitle: "Escultura tridimensional com realce sutil de contornos atléticos",
      tag: "Procedimento Assinatura",
      description:
        "O protocolo de Lipo HD combina a técnica de lipoescultura anatômica com o método autoral EndoFIT. Remove seletivamente a gordura profunda e superficial enquanto define as transições musculares com suavidade e elegância, evitando contornos artificiais.",
      benefits: [
        "Definição das linhas do abdômen, flancos e cintura",
        "Associação com tecnologia de retração para evitar flacidez",
        "Recuperação mais rápida devido à tecnologia a laser",
        "Resultados duradouros quando aliados a hábitos saudáveis",
      ],
      recovery: "Retorno às atividades leves em 5 a 7 dias",
      indication: "Pacientes próximos ao peso ideal com gordura localizada e desejo de tônus atlético",
      image: "/assets/clinica/resultado_2.jpg",
    },
    {
      id: "retracao",
      name: "Tratamento de Flacidez & Retração de Pele",
      subtitle: "Estímulo térmico profundo para máxima contração cutânea",
      tag: "Tecnologia a Laser",
      description:
        "Indicado para peles com perda de elasticidade pós-gestação, emagrecimento ou envelhecimento natural. A fibra laser é introduzida na camada subdérmica emitindo calor calibrado que contrai as septos fibrosos e sintetiza colágeno novo de alta densidade.",
      benefits: [
        "Elimina a flacidez residual sem grandes incisões",
        "Melhora da textura, densidade e tônus da pele",
        "Pode ser associado ou realizado isoladamente",
        "Efeito lifting imediato com evolução progressiva em até 6 meses",
      ],
      recovery: "Pouco ou nenhum afastamento social (2 a 3 dias)",
      indication: "Flacidez abdominal, interna de coxas, braços e contorno submentoniano (papada)",
      image: "/assets/clinica/resultado_3.jpg",
    },
    {
      id: "gluteo",
      name: "Remodelamento & Harmonização Glútea",
      subtitle: "Projeção anatômica tridimensional com preenchimento autólogo",
      tag: "Lipoenxertia Estruturada",
      description:
        "Utiliza a própria gordura aspirada e purificada da paciente para preencher depressões trocantéricas, corrigir assimetrias e projetar o bumbum com formato harmônico em gota ou ampulheta, com máxima taxa de integração celular.",
      benefits: [
        "Zero risco de rejeição por utilizar tecido próprio da paciente",
        "Toque 100% natural e transição imperceptível",
        "Correção do famoso 'vão lateral' (depressão trocantérica)",
        "Harmonização da proporção cintura-quadril",
      ],
      recovery: "Cuidados especiais ao sentar por 10 a 14 dias",
      indication: "Mulheres que buscam maior projeção, correção de formato e firmeza glútea",
      image: "/assets/clinica/resultado_4.jpg",
    },
    {
      id: "corporal",
      name: "Contorno Corporal & Refinamento Estruturado",
      subtitle: "Abdominoplastia harmônica, lipo de braços e refinamento dorsal",
      tag: "Harmonia Total",
      description:
        "Conjunto de intervenções cirúrgicas e estéticas avançadas desenhadas para rejuvenescer a silhueta em 360 graus. Engloba o tratamento da diástase dos retos abdominais, retirada de excesso de pele e lipomodelagem de braços e dorso.",
      benefits: [
        "Restauração da parede abdominal pós-maternidade (correção de diástase)",
        "Eliminação da 'gordurinha do sutiã' e do dorso",
        "Braquioplastia e definição dos braços sem peso visual",
        "Cicatrizes estrategicamente ocultas na linha da roupa íntima",
      ],
      recovery: "Período de repouso entre 14 e 21 dias",
      indication: "Pós-parto (Mommy Makeover) ou pós-emagrecimento acentuado",
      image: "/assets/clinica/resultado_1.jpg",
    },
  ];

  const currentProcedure = procedures.find((p) => p.id === activeTab) || procedures[0];

  const getWaLinkForProcedure = (procName: string) => {
    return (
      "https://wa.me/5563992166156?text=" +
      encodeURIComponent(
        `Olá Dra. Letícia Benício! Tenho muito interesse no procedimento: ${procName}. Gostaria de agendar uma consulta de avaliação.`
      )
    );
  };

  return (
    <section id="procedimentos" className="relative py-28 bg-[#0C0C0E] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C5A059]/30 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5C396]">
                Especialidades Cirúrgicas & Estéticas
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FDFBF7] tracking-tight">
              Catálogo de Procedimentos de Alta Definição
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Tratamentos corporais com foco em naturalidade, recuperação guiada e equipamentos de alta precisão tecnológica.
            </p>
          </div>

          <a
            href={getWaLinkForProcedure("Avaliação Geral de Procedimentos")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C5A059]/40 hover:border-[#C5A059] bg-[#C5A059]/10 text-xs uppercase tracking-wider font-semibold text-[#FDFBF7] hover:bg-[#C5A059]/20 transition-all self-start md:self-auto shrink-0 shadow-lg shadow-[#C5A059]/10"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A059]" />
            <span>Tirar dúvidas no WhatsApp</span>
          </a>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-8 scrollbar-none">
          {procedures.map((proc) => {
            const isActive = activeTab === proc.id;
            return (
              <button
                key={proc.id}
                onClick={() => setActiveTab(proc.id)}
                className={`px-5 py-3 rounded-2xl text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#C5A059] text-black border-[#C5A059] shadow-lg shadow-[#C5A059]/25 scale-100"
                    : "bg-[#18181B]/80 text-zinc-400 hover:text-white border-white/10 hover:border-white/20"
                }`}
              >
                <span>{proc.name.split("(")[0]}</span>
                {isActive && <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />}
              </button>
            );
          })}
        </div>

        {/* Featured Procedure Card */}
        <div className="rounded-3xl border border-white/10 bg-[#141418] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E5C396] text-[11px] font-semibold uppercase tracking-wider">
                {currentProcedure.tag}
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-4xl text-white font-medium">
                  {currentProcedure.name}
                </h3>
                <p className="text-sm sm:text-base text-[#C5A059] font-medium">
                  {currentProcedure.subtitle}
                </p>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {currentProcedure.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  Principais Diferenciais & Benefícios:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProcedure.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-200">
                      <div className="w-4 h-4 rounded-full bg-[#C5A059]/20 text-[#E5C396] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta Specs: Recovery & Indication */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                      Recuperação Estimada
                    </div>
                    <div className="text-xs text-white font-medium mt-0.5">
                      {currentProcedure.recovery}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                      Indicação Cirúrgica
                    </div>
                    <div className="text-xs text-white font-medium mt-0.5">
                      {currentProcedure.indication}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={getWaLinkForProcedure(currentProcedure.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#876228] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02] active:scale-98 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Consulta para {currentProcedure.name.split(" ")[0]}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Right Image Feature */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#C5A059]/30 shadow-2xl shadow-black/80 bg-black/60 group">
                <Image
                  src={currentProcedure.image}
                  alt={currentProcedure.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-xs text-zinc-300">
                  <span className="text-[#E5C396] font-semibold">Registro de Caso Clínico</span> • Procedimento executado no Grupo Ana Luíza Duarte (Palmas - TO).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
