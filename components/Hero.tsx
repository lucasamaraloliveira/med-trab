
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-[100dvh] flex items-center overflow-hidden bg-slate-900 pt-20 md:pt-0">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=75&w=1200"
          className="w-full h-full object-cover object-center"
          alt="Medical Facility"
          width="1200"
          height="800"
          loading="eager"
          fetchpriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-blue-900/90 md:from-blue-900/80 to-blue-900/40 md:to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8 py-10 md:py-0 text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]"
          >
            Saúde Ocupacional Levada a <span className="text-blue-400">Sério.</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-200 max-w-lg mx-auto md:mx-0"
          >
            Garantimos a conformidade legal da sua empresa e o bem-estar dos seus colaboradores através de medicina e segurança do trabalho de excelência.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#servicos"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all text-center shadow-lg active:scale-95 text-base"
            >
              Conhecer Serviços
            </a>
            <a
              href="#contato"
              className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold hover:bg-white/20 transition-all text-center active:scale-95 text-base"
            >
              Falar com Consultor
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 pt-4 justify-center md:justify-start"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((n) => (
                <img
                  key={n}
                  src={`https://picsum.photos/60/60?random=${n}`}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-slate-900 bg-slate-800"
                  alt="Client"
                  width="32"
                  height="32"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              <span className="font-bold text-white">500+</span> empresas confiam na Med Trab.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block relative"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 lg:p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V11.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm lg:text-base">100% Conformidade</h3>
                <p className="text-slate-400 text-xs lg:text-sm">Normas Regulamentadoras (NRs)</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "95%" }}
                  transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                  className="h-full bg-blue-500"
                ></motion.div>
              </div>
              <p className="text-slate-400 text-xs lg:text-sm">Redução de riscos trabalhistas e acidentes.</p>
            </div>
          </div>

          {/* Floating Element */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0,
              ease: "easeInOut",
              duration: 3
            }}
            className="absolute -bottom-6 md:-left-4 lg:-left-6 bg-white p-4 lg:p-6 rounded-2xl shadow-xl hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pr-4">
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Agendamento</p>
                  <p className="text-xs lg:text-sm font-bold text-slate-900">Exames em até 24h</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
