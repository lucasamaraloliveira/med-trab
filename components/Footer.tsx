
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Facebook, Youtube, X, Shield, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ];

  const privacyPolicy = {
    title: "Política de Privacidade",
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    content: (
      <div className="space-y-4 text-slate-600">
        <p>A **Med Trab** está comprometida com a proteção de seus dados pessoais. Esta política explica como coletamos e tratamos suas informações.</p>
        <h5 className="font-bold text-slate-900">1. Coleta de Dados</h5>
        <p>Coletamos dados fornecidos voluntariamente através de nossos formulários de contato, como nome, e-mail corporativo e nome da empresa.</p>
        <h5 className="font-bold text-slate-900">2. Finalidade</h5>
        <p>As informações são utilizadas exclusivamente para responder a solicitações de orçamento e fornecer informações sobre nossos serviços de medicina e segurança do trabalho.</p>
        <h5 className="font-bold text-slate-900">3. Compartilhamento</h5>
        <p>Não vendemos ou compartilhamos seus dados com terceiros para fins de marketing. O acesso é restrito aos colaboradores autorizados da Med Trab.</p>
        <h5 className="font-bold text-slate-900">4. LGPD</h5>
        <p>Atuamos em total conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), garantindo o direito de acesso, correção e exclusão de seus dados.</p>
      </div>
    )
  };

  const termsOfUse = {
    title: "Termos de Uso",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    content: (
      <div className="space-y-4 text-slate-600">
        <p>Ao acessar o site da **Med Trab**, você concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis.</p>
        <h5 className="font-bold text-slate-900">1. Uso de Licença</h5>
        <p>É concedida permissão para baixar temporariamente uma cópia dos materiais no site para visualização pessoal e não comercial apenas.</p>
        <h5 className="font-bold text-slate-900">2. Isenção de Responsabilidade</h5>
        <p>Os materiais no site da Med Trab são fornecidos 'como estão'. Não oferecemos garantias implícitas e, por este meio, isentamos e negamos todas as outras garantias.</p>
        <h5 className="font-bold text-slate-900">3. Limitações</h5>
        <p>Em nenhum caso a Med Trab ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais.</p>
        <h5 className="font-bold text-slate-900">4. Precisão dos Materiais</h5>
        <p>Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A Med Trab não garante que qualquer material seja preciso, completo ou atual.</p>
      </div>
    )
  };

  const activeModal = modalType === 'privacy' ? privacyPolicy : termsOfUse;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 md:pt-16 pb-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div className="col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                MT
              </div>
              <span className="text-white text-xl font-bold">Med Trab</span>
            </div>
            <p className="text-xs md:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Soluções inteligentes em Medicina e Segurança do Trabalho. Transformando conformidade legal em saúde e produtividade.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 text-sm md:text-base">Links Rápidos</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="hidden sm:block text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 text-sm md:text-base">Serviços</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: '1' }))}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Exames Ocupacionais
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: '2' }))}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Gestão de PGR/PCMSO
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: '3' }))}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Treinamentos de NR
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-service-modal', { detail: '4' }))}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Laudos Técnicos
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 text-sm md:text-base">Redes Sociais</h4>
            <div className="flex justify-center sm:justify-start gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-white ${social.color} shadow-lg hover:shadow-blue-500/20`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4 text-[10px] md:text-xs text-slate-500 text-center">
          <p>© 2024 Med Trab Medicina do Trabalho. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-blue-400 transition-colors"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-blue-400 transition-colors"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal Legal */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalType(null)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {activeModal?.icon}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">{activeModal?.title}</h3>
                </div>
                <button
                  onClick={() => setModalType(null)}
                  className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                {activeModal?.content}
              </div>

              <div className="p-6 md:p-8 border-t border-slate-100 bg-slate-50">
                <button
                  onClick={() => setModalType(null)}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                  Entendi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
