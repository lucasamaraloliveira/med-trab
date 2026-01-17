
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: '1',
      title: 'Exames Ocupacionais',
      description: 'Admissionais, demissionais, periódicos, retorno ao trabalho e mudança de função.',
      icon: '🩺',
      details: 'Realizamos todos os exames médicos necessários para manter sua empresa em conformidade com a NR-7. Contamos com rede credenciada ampla e agilidade na emissão do ASO (Atestado de Saúde Ocupacional).'
    },
    {
      id: '2',
      title: 'PGR & PCMSO',
      description: 'Elaboração e gestão completa dos programas obrigatórios de segurança e saúde.',
      icon: '📋',
      details: 'Desenvolvemos o Programa de Gerenciamento de Riscos (PGR) e o Programa de Controle Médico de Saúde Ocupacional (PCMSO), garantindo a identificação e controle de riscos no ambiente de trabalho.'
    },
    {
      id: '3',
      title: 'Treinamentos NR',
      description: 'Capacitação completa para NR-10, NR-35, CIPA, Primeiros Socorros e mais.',
      icon: '🎓',
      details: 'Oferecemos treinamentos teóricos e práticos ministrados por profissionais qualificados, focados na prevenção de acidentes e no cumprimento das Normas Regulamentadoras.'
    },
    {
      id: '4',
      title: 'Laudos Técnicos',
      description: 'LTCAT, Laudos de Insalubridade e Periculosidade com precisão jurídica.',
      icon: '⚖️',
      details: 'Elaboramos laudos técnicos detalhados (LTCAT, LIP) para fins previdenciários e trabalhistas, assegurando que a empresa esteja protegida juridicamente.'
    },
    {
      id: '5',
      title: 'Ergonomia',
      description: 'Análise ergonômica do trabalho para aumentar a produtividade e saúde.',
      icon: '🪑',
      details: 'Realizamos a Análise Ergonômica do Trabalho (AET) em conformidade com a NR-17, visando adaptar as condições de trabalho às características psicofisiológicas dos colaboradores.'
    },
    {
      id: '6',
      title: 'Perícias Médicas',
      description: 'Assistência técnica em processos trabalhistas com médicos especializados.',
      icon: '🔍',
      details: 'Oferecemos assistência técnica pericial em ações trabalhistas e cíveis, com elaboração de quesitos, acompanhamento de diligências e análise de laudos periciais.'
    },
  ];

  // Listener para abrir modal via eventos externos (ex: Footer)
  React.useEffect(() => {
    const handleOpenModal = (e: any) => {
      const serviceId = e.detail;
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service);
        // Scroll suave para a seção para garantir contexto
        document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('open-service-modal', handleOpenModal);
    return () => window.removeEventListener('open-service-modal', handleOpenModal);
  }, []);

  const whatsappUrl = (serviceTitle: string) => `https://wa.me/551140028922?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20${encodeURIComponent(serviceTitle)}.`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-3">O que fazemos</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            Soluções completas para a sua empresa
          </h3>
          <p className="text-sm md:text-base text-slate-600">
            Nossos serviços são desenhados para proteger seu maior patrimônio: as pessoas. Tudo dentro das normas legais vigentes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 group cursor-default"
            >
              <div className="text-3xl md:text-4xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">{service.title}</h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <button
                onClick={() => setSelectedService(service)}
                className="flex items-center gap-2 text-blue-600 font-bold text-xs md:text-sm group-hover:gap-3 transition-all"
              >
                Saber mais
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal de Detalhes do Serviço */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8 md:p-10">
                <div className="text-5xl mb-6">{selectedService.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{selectedService.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                  {selectedService.details}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappUrl(selectedService.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-2xl font-bold text-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  >
                    Falar com Consultor
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-slate-100 text-slate-700 py-4 px-6 rounded-2xl font-bold text-center hover:bg-slate-200 transition-all"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
