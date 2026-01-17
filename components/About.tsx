
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <div className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=650"
              alt="Profissional de Medicina do Trabalho"
              className="w-full h-auto object-cover max-h-[400px] md:max-h-none"
              width="650"
              height="480"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Experience Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-blue-600 text-white p-6 md:p-8 rounded-3xl shadow-xl hidden sm:block"
          >
            <p className="text-3xl md:text-4xl font-bold">15+</p>
            <p className="text-xs md:text-sm font-medium opacity-80">Anos de Experiência</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left"
        >
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm">Quem Somos</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
            Comprometidos com a excelência em medicina ocupacional
          </h3>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed">
            A Med Trab nasceu da necessidade de oferecer um serviço de medicina do trabalho que fosse além da entrega de papéis. Focamos na gestão real de riscos e na saúde preventiva.
          </p>

          <ul className="space-y-3 md:space-y-4 text-left inline-block md:block">
            {[
              'Equipe técnica altamente qualificada',
              'Sistemas modernos de gestão de NRs',
              'Atendimento ágil e resolutivo',
              'Unidade móvel para exames in-company'
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="mt-1 w-4 h-4 md:w-5 md:h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs md:text-base text-slate-700 font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pt-2 md:pt-4"
          >
            <button
              onClick={() => setIsStoryOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95 text-sm md:text-base shadow-lg shadow-slate-200"
            >
              Conheça Nossa História
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal da História */}
      <AnimatePresence>
        {isStoryOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsStoryOpen(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsStoryOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-blue-600 hover:text-white transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8 md:p-12">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Nossa Jornada
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                  Transformando Segurança em <span className="text-blue-600">Estratégia</span>
                </h3>

                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Fundada em 2009, a **Med Trab** nasceu com o propósito de desmistificar a medicina do trabalho. Percebemos que muitas empresas viam a conformidade legal apenas como um custo ou uma burocracia necessária.
                  </p>
                  <p>
                    Nossa trajetória é marcada por inovação e proximidade. Fomos pioneiros na implementação de unidades móveis totalmente equipadas, levando saúde diretamente para dentro dos parques industriais de nossos clientes, reduzindo o absenteísmo e aumentando o cuidado real.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 py-6 border-y border-slate-100">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Missão
                      </h4>
                      <p className="text-xs md:text-sm">Oferecer soluções integradas em saúde e segurança que potencializem o capital humano das empresas.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Visão
                      </h4>
                      <p className="text-xs md:text-sm">Ser a referência nacional em gestão de riscos ocupacionais até 2030, através da tecnologia e cuidado humano.</p>
                    </div>
                  </div>

                  <p>
                    Hoje, com mais de 15 anos de estrada e 500+ clientes ativos, continuamos com o mesmo espírito: cuidar de quem faz a sua empresa crescer. Porque para nós, segurança do trabalho não é sobre papéis, é sobre **vida**.
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsStoryOpen(false)}
                    className="flex-1 bg-slate-900 text-white py-4 px-8 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                  >
                    Fechar História
                  </button>
                  <a
                    href="#contato"
                    onClick={() => setIsStoryOpen(false)}
                    className="flex-1 border-2 border-blue-600 text-blue-600 py-4 px-8 rounded-2xl font-bold text-center hover:bg-blue-50 transition-all"
                  >
                    Falar com Especialista
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
