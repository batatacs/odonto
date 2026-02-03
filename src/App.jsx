import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ArrowRight, Instagram, Facebook, Linkedin, MapPin, Play, Quote, Star,
  Send, CheckCircle, Smartphone, Code, ShieldCheck, HeartPulse, Activity,
  Wifi, Phone, Car, Snowflake, Accessibility, AlertCircle,
  Coffee, Camera, Monitor, Sparkles, Volume2, VolumeX
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

/* ==================================================================================
  GUIA DE SUBSTITUIÇÃO DE ARQUIVOS (LOCAL)
  ==================================================================================
  1. Crie a pasta: src/assets
  2. Coloque seus arquivos lá com os nomes sugeridos abaixo.
  3. DESCOMENTE (remova o //) das linhas de 'import' abaixo.
*/

// --- VÍDEOS ---
import localPreloaderVideo from './assets/imagens/preloader.mp4';      // Seu vídeo do logo dourado
// import localHeroVideo from './assets/video-hero.mp4';                // Vídeo de fundo da mulher sorrindo
import localTransformVideo from './assets/imagens/odonto.mp4';  // Vídeo "Histórias que Inspiram"
import localModalVideo from './assets/imagens/odonto.mp4';          // Vídeo da Dra. atendendo (para o Modal)

// --- IMAGENS GERAIS ---
// import localHeroPoster from './assets/hero-poster.jpg';              // Capa do vídeo se ele demorar a carregar
import localAboutImg from './assets/imagens/carolina.jpg';                 // Foto da Dra. Carolina (Vertical)
// import localClinic1 from './assets/clinica-1.jpg';                   // Foto da clínica 1
// import localClinic2 from './assets/clinica-2.jpg';                   // Foto da clínica 2 (Reserva)
// import localClinic3 from './assets/clinica-3.jpg';                   // Foto da clínica 3 (Reserva)

// --- IMAGENS DOS SERVIÇOS (NOVO) ---
// import localServiceLentes from './assets/servico-lentes.jpg';
// import localServiceOrto from './assets/servico-orto.jpg';
// import localServiceImplante from './assets/servico-implante.jpg';
// import localServiceGeral from './assets/servico-geral.jpg';

// --- MARKETING ---
// import localSocialImage from './assets/share-image.jpg';             // Imagem 1200x630px para WhatsApp


// --- 1. DEFINIÇÃO DOS ÍCONES PERSONALIZADOS ---

const IconToothBeauty = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s5.5-2.5 5.5-10a5.5 5.5 0 00-11 0c0 7.5 5.5 10 5.5 10z" />
    <path d="M16 6l4-4" />
    <path d="M20 6l-4-4" />
    <path d="M9 7h6" />
  </svg>
);

const IconBraces = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12h18" />
    <path d="M3 12c0 5 4 9 9 9s9-4 9-9" />
    <rect x="5" y="10" width="4" height="4" rx="1" />
    <rect x="15" y="10" width="4" height="4" rx="1" />
    <path d="M12 10v4" />
  </svg>
);

const IconImplant = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20" />
    <path d="M8 6h8" />
    <path d="M8 10h8" />
    <path d="M8 14h8" />
    <path d="M7 2h10" />
  </svg>
);

const IconCheckup = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

// --- 2. CONFIGURAÇÕES E DADOS ---

const CONFIG = {
  whatsapp: "551935821412",
  phone: "(19) 3582-1412",
  developerName: "Anderson Camilo",
  developerLink: "https://seuportfolio.com.br",
  startYear: 2024,
  address: "MeDBucal, Av. da Saudade, 226 - Jardim América, Santa Rita do Passa Quatro - SP",
  googleMapsEmbed: "https://maps.google.com/maps?q=Av.+da+Saudade,+226+-+Jardim+America,+Santa+Rita+do+Passa+Quatro+-+SP&t=&z=17&ie=UTF8&iwloc=&output=embed"
};

const MARKETING_CONFIG = {
  googleAnalyticsId: "G-XXXXXXXXXX",
  facebookPixelId: "XXXXXXXXXXXXXXX",
  siteTitle: "Dra. Carolina Marelli | Odontologia de Alto Padrão",
  siteDescription: "Referência em Lentes de Contato, Implantes e Ortodontia Digital.",
  siteUrl: "https://dracarolinamarelli.com.br",

  // socialImage: localSocialImage || "https://images.unsplash.com/photo-1620733723572-11c52f7c2d82?q=80&w=1200"
  socialImage: "https://images.unsplash.com/photo-1620733723572-11c52f7c2d82?q=80&w=1200"
};

// ==================================================================================
// LISTA MESTRA DE IMAGENS E VÍDEOS (TROQUE AQUI)
// ==================================================================================
const ASSETS = {
  // 1. VÍDEO DE CARREGAMENTO (Seu Logo animado)
  preloaderVideo: localPreloaderVideo,
  // preloaderVideo: "https://assets.mixkit.co/videos/preview/mixkit-gold-particles-loop-5441-large.mp4",

  // 2. VÍDEO DO TOPO (Hero)
  // heroVideo: localHeroVideo,
  heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-with-a-beautiful-smile-4687-large.mp4",

  // 3. CAPA DO VÍDEO (Aparece antes do play)
  // heroPoster: localHeroPoster,
  heroPoster: "https://images.unsplash.com/photo-1620733723572-11c52f7c2d82?q=80&w=2070",

  // 4. VÍDEO "HISTÓRIAS QUE INSPIRAM"
  transformationVideo: localTransformVideo,
  // transformationVideo: "https://assets.mixkit.co/videos/preview/mixkit-girl-smiling-in-a-field-of-flowers-4632-large.mp4",

  // 5. VÍDEO DO MODAL (Bio)
  modalVideo: localModalVideo,
  // modalVideo: "https://player.vimeo.com/external/372335193.sd.mp4?s=017d9c63d5a2283091d3237194883446067eb215&profile_id=164&oauth2_token_id=57447761",

  // 6. FOTO DA DRA. CAROLINA (Vertical)
  aboutPoster: localAboutImg,
  // aboutPoster: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200",

  // 7. FOTOS DA CLÍNICA
  clinic: [
    // localClinic1, 
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
    // localClinic2,
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200",
    // localClinic3 
    "https://images.unsplash.com/photo-1504853823479-5302135a5872?q=80&w=1200"
  ]
};

const SERVICES_DATA = [
  {
    id: 'lentes',
    title: "Lentes de Contato",
    shortDesc: "Design do sorriso com cerâmicas ultra-finas.",
    longDesc: "Transforme seu sorriso com a técnica mais sofisticada da estética dental. As lentes de contato são lâminas de porcelana ultra-finas (0.2mm a 0.5mm) aplicadas sobre os dentes. Elas corrigem cor, formato, tamanho e pequenos desalinhamentos com desgaste mínimo da estrutura dental natural. Utilizamos cerâmicas importadas que mimetizam a textura, translucidez e brilho do esmalte real, garantindo um resultado imperceptível e duradouro.",
    benefits: ["Sem manchas com o tempo", "Alta resistência", "Correção rápida", "Preservação dental"],
    icon: IconToothBeauty,
    // image: localServiceLentes || "https://..."
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800"
  },
  {
    id: 'orto',
    title: "Ortodontia & Aparelhos",
    shortDesc: "Aparelhos estéticos e Invisalign para todas as idades.",
    longDesc: "Alinhamento dental com discrição e eficiência. Trabalhamos com o que há de mais moderno na ortodontia digital, incluindo o sistema Invisalign e aparelhos de safira. O tratamento é planejado digitalmente, permitindo prever a movimentação dos dentes e o tempo estimado de correção, proporcionando mais conforto e previsibilidade para o seu sorriso.",
    benefits: ["Invisalign Doctor", "Aparelhos Invisíveis", "Planejamento 3D", "Tratamentos rápidos"],
    icon: IconBraces,
    // image: localServiceOrto || "https://..."
    image: "https://images.unsplash.com/photo-1572093539824-c020d9396eb0?q=80&w=800"
  },
  {
    id: 'implantes',
    title: "Cirurgias & Implantes",
    shortDesc: "Reabilitação complexa e extração de sisos com sedação.",
    longDesc: "Recupere a função e a estética com segurança total. Utilizamos implantes de tecnologia suíça (Straumann), reconhecidos mundialmente pela rápida osseointegração. Realizamos também extrações de sisos, enxertos ósseos e cirurgias gengivais. Para pacientes ansiosos, oferecemos a opção de sedação consciente, garantindo um procedimento tranquilo e praticamente indolor.",
    benefits: ["Implantes Suíços", "Carga Imediata", "Sedação Consciente", "Ambiente estéril"],
    icon: IconImplant,
    // image: localServiceImplante || "https://..."
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800"
  },
  {
    id: 'geral',
    title: "Clínica Geral",
    shortDesc: "Prevenção, limpeza e restaurações para saúde integral.",
    longDesc: "A base de um sorriso bonito é a saúde. Nossa clínica geral foca na prevenção e manutenção. Realizamos profilaxia, restaurações estéticas e check-ups digitais.",
    benefits: ["Câmera Intraoral", "Restaurações Invisíveis", "Limpeza Ultrassom", "Check-up Digital"],
    icon: IconCheckup,
    // image: localServiceGeral || "https://..."
    image: "https://images.unsplash.com/photo-1609840114035-1c29046a8af3?q=80&w=800"
  }
];

// --- 3. HELPER: SEO & ANALYTICS ---

const trackLead = (source) => {
  console.log(`Lead gerado via: ${source}`);
};

// --- 4. FUNÇÕES UTILITÁRIAS E COMPONENTES MENORES ---

const getBusinessStatus = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isBusinessHours = day >= 1 && day <= 5 && hour >= 8 && hour < 17;
  return {
    isOpen: isBusinessHours,
    color: isBusinessHours ? "#25D366" : "#64748b",
    statusText: isBusinessHours ? "Online Agora" : "Atendimento: Seg-Sex 8h-17h",
    pulse: isBusinessHours
  };
};

const CustomCursor = () => {
  const cursorX = useSpring(0, { damping: 20, stiffness: 400 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 400 });
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return null;

  return (
    <motion.div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[10000] hidden md:flex items-center justify-center`}
      style={{ x: cursorX, y: cursorY }}
      animate={{
        scale: clicking ? 0.8 : hovered ? 1.5 : 1,
        backgroundColor: hovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
        border: hovered ? "1px solid rgba(255, 255, 255, 0.8)" : "1px solid rgba(255, 255, 255, 0.4)"
      }}
    >
      <motion.div
        className="w-1 h-1 bg-amber-500 rounded-full"
        animate={{ opacity: 1 }}
      />
    </motion.div>
  );
};

const WhatsAppIcon = ({ size = 24, color = "white" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const WhatsAppFloating = () => {
  const [status, setStatus] = useState(getBusinessStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getBusinessStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.a
      href={`https://wa.me/${CONFIG.whatsapp}?text=Olá,%20acessei%20o%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação.`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead('Botão Flutuante')}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="interactive fixed bottom-6 right-6 z-[9000] group"
    >
      <div className="relative">
        {status.pulse && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] font-bold text-white items-center justify-center">1</span>
          </span>
        )}

        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-stone-900 px-5 py-3 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-x-2 group-hover:translate-x-0 duration-300 hidden md:block">
          <p className="text-xs font-bold uppercase tracking-wider mb-0.5 flex items-center gap-2">
            {status.isOpen ? (
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            ) : (
              <span className="w-2 h-2 bg-stone-400 rounded-full"></span>
            )}
            Atendimento
          </p>
          <p className="text-[10px] text-stone-500">{status.statusText}</p>
          <div className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-3 h-3 bg-white transform rotate-45"></div>
        </div>

        <div
          className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
          style={{
            backgroundColor: status.color,
            boxShadow: status.isOpen ? '0 10px 30px rgba(37,211,102,0.4)' : '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          <WhatsAppIcon size={30} />
        </div>
      </div>
    </motion.a>
  );
};

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  const Icon = service.icon;

  const handleServiceSchedule = () => {
    trackLead(`Modal Serviço - ${service.title}`);
    const message = `Olá! Vi os detalhes sobre *${service.title}* no site e gostaria de agendar uma avaliação.`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-[#0f0f0f] w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row relative cursor-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão Fechar */}
          <button
            onClick={onClose}
            className="interactive absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-amber-500 rounded-full text-white transition-all duration-300 border border-white/10"
          >
            <X size={24} />
          </button>

          {/* Imagem do Serviço */}
          <div className="w-full md:w-5/12 h-56 md:h-auto relative overflow-hidden bg-black shrink-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-90"></div>

            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mb-3 text-black">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-serif leading-tight">{service.title}</h3>
            </div>
          </div>

          <div className="w-full md:w-7/12 p-6 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Detalhes do Procedimento</span>

            <p className="text-stone-300 text-base md:text-lg font-light leading-relaxed mb-8">
              {service.longDesc}
            </p>

            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Benefícios Principais</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-400 text-sm">
                  <CheckCircle size={14} className="text-amber-500 shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleServiceSchedule}
                className="interactive flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 md:py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
              >
                Agendar este Tratamento <ArrowRight size={16} />
              </button>
              <button
                onClick={onClose}
                className="interactive px-6 py-3 md:py-4 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all text-xs uppercase tracking-widest"
              >
                Voltar
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const BioModal = ({ isOpen, onClose }) => {
  // Hooks para controlar o vídeo e o som
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  if (!isOpen) return null;

  // Função para alternar o som ao clicar
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-[#0f0f0f] w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row relative cursor-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="interactive absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-amber-500 rounded-full text-white transition-all duration-300 border border-white/10 hover:rotate-90"
          >
            <X size={20} />
          </button>

          {/* Área do Vídeo (Clicável para som) */}
          <div
            className="w-full md:w-5/12 h-56 md:h-full relative overflow-hidden bg-black shrink-0 cursor-pointer group"
            onClick={toggleSound}
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted // Começa mudo para permitir autoplay
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              {/* Certifique-se que ASSETS.modalVideo está apontando para um arquivo .mp4 válido */}
              <source src={ASSETS.modalVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 pointer-events-none"></div>

            <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4 text-black animate-pulse">
                {/* Ícone muda dependendo se está mudo ou não */}
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2 block">
                {isMuted ? "Toque para Ouvir" : "Ouvindo"}
              </span>
              <p className="text-white text-2xl font-serif leading-tight">Bastidores de uma transformação.</p>
            </div>
          </div>

          <div className="w-full md:w-7/12 p-6 md:p-16 overflow-y-auto custom-scrollbar">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">A Especialista</span>
            {/* Header com Nome e Subtítulo */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-none font-['Cinzel'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">DRA. CAROLINA MARELLI</h2>
              <span className="text-stone-400 uppercase font-light text-[10px] tracking-[0.4em] block mt-1">ODONTOLOGIA ESPECIALIZADA</span>
            </div>

            <div className="prose prose-invert prose-lg text-stone-400 font-light text-sm md:text-base">
              <p className="mb-6">
                <span className="text-white font-medium">"A beleza é uma harmonia matemática."</span> Desde pequena, a arte de cuidar sempre esteve presente em minha vida. Minha abordagem na odontologia não é apenas técnica; é sobre devolver a autoestima e a confiança que muitas vezes se perderam.
              </p>
              <p className="mb-8">
                Com especializações internacionais e uma busca incessante pela perfeição natural, fundei meu atelier para oferecer uma experiência que vai muito além da cadeira do dentista. Aqui, cada sorriso é uma obra de arte única.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 border-t border-white/10 pt-8 mt-4">
              <div className="interactive group cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-colors -ml-4">
                <span className="block text-2xl md:text-3xl font-serif text-white mb-1 group-hover:text-amber-500 transition-colors">Harvard</span>
                <span className="text-[9px] md:text-[10px] text-stone-500 uppercase tracking-widest">Medical School (Ext)</span>
              </div>
              <div className="interactive group cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-colors -ml-4">
                <span className="block text-2xl md:text-3xl font-serif text-white mb-1 group-hover:text-amber-500 transition-colors">SBOE</span>
                <span className="text-[9px] md:text-[10px] text-stone-500 uppercase tracking-widest">Membro Titular</span>
              </div>
            </div>

            <button onClick={onClose} className="interactive mt-10 text-xs uppercase tracking-widest text-white border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors">
              Voltar ao Site
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- NOVO COMPONENTE: PLAYER INTELIGENTE (Copie e cole ANTES do 'const App') ---
const SmartVideoPlayer = ({ src, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.muted = false; // Liga o som
      videoRef.current.volume = 1.0;
      videoRef.current.play();
    }
  };

  // Se o vídeo pausar ou acabar, mostra o botão de novo
  const handlePauseOrEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer bg-black" onClick={!isPlaying ? handlePlay : undefined}>
      <video
        ref={videoRef}
        controls={isPlaying} // Controles aparecem só quando toca
        poster={poster}
        className="w-full h-full object-cover"
        playsInline
        onPause={handlePauseOrEnd}
        onEnded={handlePauseOrEnd}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* O botão Play só aparece se NÃO estiver tocando (!isPlaying) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all z-20">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform">
            <Play size={32} fill="currentColor" className="text-white ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

// --- 6. COMPONENTES PRINCIPAIS (APP) ---

const App = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [formError, setFormError] = useState("");

  const { scrollYProgress } = useScroll();

  // --- INJEÇÃO DE SEO E ANALYTICS ---
  useEffect(() => {
    document.title = MARKETING_CONFIG.siteTitle;

    const setMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', MARKETING_CONFIG.siteDescription);
    setMetaTag('og:title', MARKETING_CONFIG.siteTitle, 'property');
    setMetaTag('og:description', MARKETING_CONFIG.siteDescription, 'property');
    setMetaTag('og:image', MARKETING_CONFIG.socialImage, 'property');
    setMetaTag('og:image:width', '1200', 'property');
    setMetaTag('og:image:height', '630', 'property');
    setMetaTag('og:url', MARKETING_CONFIG.siteUrl, 'property');
    setMetaTag('og:type', 'website', 'property');

    if (MARKETING_CONFIG.googleAnalyticsId !== "G-XXXXXXXXXX") {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${MARKETING_CONFIG.googleAnalyticsId}`;
      document.head.appendChild(gaScript);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', MARKETING_CONFIG.googleAnalyticsId);
    }

    if (MARKETING_CONFIG.facebookPixelId !== "XXXXXXXXXXXXXXX") {
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
          n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
      }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');

      if (window.fbq) window.fbq('init', MARKETING_CONFIG.facebookPixelId);
      if (window.fbq) window.fbq('track', 'PageView');
    }
  }, []);

  useEffect(() => {
    if (menuOpen || modalOpen || selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen, modalOpen, selectedService]);

  useEffect(() => {
    // Timeout para o vídeo do preloader (ajustável)
    const timer = setTimeout(() => setLoading(false), 4000);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const interest = formData.get('interest');
    const message = formData.get('message');

    if (!name || name.length < 3) {
      setFormError("Por favor, digite seu nome completo.");
      return;
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setFormError("Por favor, digite um telefone válido com DDD.");
      return;
    }

    trackLead(`Formulário - ${interest}`);

    const whatsappMessage = `*Olá! Vim pelo Site Premium.*\n\nMe chamo *${name}*.\nTelefone: ${phone}\nInteresse: *${interest}*\n\n*Mensagem:*\n${message}\n\nGostaria de verificar disponibilidade de agenda.`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-contain"
        >
          <source src={ASSETS.preloaderVideo} type="video/mp4" />
        </video>

        {/* Barra de Progresso Dourada */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
          className="absolute bottom-0 left-0 h-1 bg-amber-500 z-20"
        />
      </div>
    );
  }

  return (
    <div className="font-sans text-stone-200 bg-[#050505] min-h-screen selection:bg-amber-500/30 selection:text-white cursor-none overflow-x-hidden">
      <CustomCursor />
      <WhatsAppFloating />
      <BioModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />

      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* --- HEADER --- */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-6 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/5' : 'bg-gradient-to-b from-black/80 to-transparent border-b border-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="interactive relative z-50 group flex flex-col items-start">
            {/* Logo Texto Puro Dourado sem ícone */}
            <h1 className="font-serif text-lg md:text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 font-['Cinzel'] font-bold leading-none">
              DRA. CAROLINA MARELLI
            </h1>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-stone-500 block mt-0.5 group-hover:text-stone-400 transition-colors">ODONTOLOGIA ESPECIALIZADA</span>
          </a>

          <nav className={`hidden md:flex items-center gap-1 backdrop-blur-md px-2 py-2 rounded-full border border-white/5 transition-all duration-500 ${scrolled ? 'bg-black/40' : 'bg-white/5 border-white/10'}`}>
            {[
              { name: 'A Especialista', href: '#especialista', highlight: true },
              { name: 'Tratamentos', href: '#tratamentos' },
              { name: 'A Clínica', href: '#clinica' },
              { name: 'Sua Jornada', href: '#jornada' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`interactive px-6 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${item.highlight
                  ? 'text-amber-500 hover:bg-amber-500/10'
                  : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contato"
              className="interactive px-6 py-2.5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all transform hover:scale-105"
            >
              Agendar
            </a>
          </div>

          <button onClick={() => setMenuOpen(true)} className="interactive md:hidden text-white p-2 z-50">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col justify-center items-center overflow-hidden"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-stone-500 hover:text-white p-4 z-50 border border-white/10 rounded-full"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col gap-6 text-center">
              {['Início', 'A Especialista', 'Tratamentos', 'A Clínica', 'Sua Jornada', 'Contato'].map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '').replace('á', 'a').replace('í', 'i')}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl md:text-5xl text-stone-400 hover:text-amber-500 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex gap-8"
            >
              <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"><Instagram size={24} /></a>
              <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"><Facebook size={24} /></a>
              <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"><Linkedin size={24} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative h-screen flex flex-col items-center justify-start overflow-hidden pt-36 md:pt-48">
        <div className="fixed inset-0 w-full h-full -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-[#050505]/70 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={ASSETS.heroPoster}
            className="w-full h-full object-cover scale-110 opacity-80"
          >
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
        </div>

        <motion.div
          className="relative z-20 container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] text-amber-200 mb-8 hover:bg-white/10 transition-colors cursor-default">
              <Star size={10} fill="currentColor" /> Odontologia de Alto Padrão
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl lg:text-9xl font-serif font-medium text-white leading-[0.9] mb-8 mix-blend-overlay">
            Sorrisos que <br /> <span className="italic font-light opacity-90">Emocionam.</span>
          </h1>

          <p className="max-w-xl mx-auto text-stone-300 font-light text-sm md:text-lg leading-relaxed mb-12 drop-shadow-md">
            A união perfeita entre tecnologia suíça e arte manual. Descubra o poder de um sorriso desenhado exclusivamente para a sua essência.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="#contato"
              className="interactive group relative px-8 py-4 bg-amber-500 text-black rounded-full font-bold text-xs uppercase tracking-widest overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">Agendar Avaliação <ArrowRight size={16} /></span>
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="interactive flex items-center gap-3 text-xs uppercase tracking-widest text-white hover:text-amber-500 transition-colors group"
            >
              <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center group-hover:border-amber-500 transition-colors group-hover:bg-amber-500/10">
                <Play size={12} fill="currentColor" />
              </div>
              Conheça a Dra.
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-100 pointer-events-none"
        >
          <span className="text-[9px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* ... (rest of sections remain the same) ... */}

      {/* --- A ESPECIALISTA --- */}
      <section id="especialista" className="py-24 md:py-32 relative bg-[#050505] z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="interactive aspect-[3/4] overflow-hidden rounded-sm relative z-10 cursor-pointer" onClick={() => setModalOpen(true)}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
                <img src={ASSETS.aboutPoster} alt="Dra Carolina" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />

                <div className="absolute bottom-8 right-8 z-20 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-amber-500/30 rounded-tl-3xl z-0"></div>
            </motion.div>

            <div>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Sobre a Especialista</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Curadoria estética e <br /> precisão científica.
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed font-light mb-8">
                "Acredito que a verdadeira sofisticação reside na naturalidade. Meu objetivo não é apenas transformar dentes, mas revelar a melhor versão da personalidade de cada paciente através de um sorriso harmônico."
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Pós-graduação em Harvard Medical School (Ext)",
                  "Speaker Internacional de Estética Dental",
                  "Membro da Sociedade Brasileira de Odontologia Estética"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-[1px] bg-stone-700 group-hover:bg-amber-500 transition-colors"></div>
                    <span className="text-sm text-stone-300 uppercase tracking-wide group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="interactive text-white border-b border-amber-500 pb-1 text-xs uppercase tracking-widest hover:text-amber-500 transition-colors"
              >
                Ver Bio Completa & Vídeo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES (ATUALIZADO COM MODAL) --- */}
      <section id="tratamentos" className="py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em]">Menu de Serviços</span>
            <h2 className="text-4xl font-serif mt-4 text-white">Excelência em Cada Detalhe</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedService(service)}
                  className="interactive bg-[#111] p-8 rounded-sm border border-white/5 hover:border-amber-500/30 transition-all duration-500 group cursor-pointer flex flex-col h-full relative overflow-hidden"
                >
                  <Icon size={32} className="text-stone-600 group-hover:text-amber-500 transition-colors mb-6" strokeWidth={1} />
                  <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow">{service.shortDesc}</p>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors flex items-center gap-2 mt-auto">
                    Saiba Mais <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- A CLÍNICA (REFORMULADA - IMAGEM ÚNICA) --- */}
      <section id="clinica" className="py-24 md:py-32 relative bg-[#050505] z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden group"
            >
              <img
                src={ASSETS.clinic[0]}
                alt="Ambiente da Clínica"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
              <div className="absolute inset-0 border border-white/10 m-6 rounded-sm pointer-events-none"></div>
            </motion.div>

            <div>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Nossa Estrutura</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Um refúgio de <br /> saúde e design.
              </h2>

              <div className="prose prose-invert text-stone-400 font-light mb-12 text-lg leading-relaxed">
                <p className="mb-6">
                  Localizado no coração de Santa Rita do Passa Quatro, o MeDBucal foi projetado para transcender a experiência odontológica tradicional.
                </p>
                <p>
                  Cada detalhe, da iluminação suave à acústica do ambiente, foi pensado para dissipar a ansiedade e promover o relaxamento. Aqui, a tecnologia de ponta convive em harmonia com um design sensorial, criando um espaço onde você se sente acolhido desde o primeiro momento.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10 pt-10">
                {[
                  { icon: Car, label: "Estacionamento Próprio" },
                  { icon: Accessibility, label: "Acessibilidade Total" },
                  { icon: Snowflake, label: "Ambiente Climatizado" },
                  { icon: Wifi, label: "Wi-Fi & Coffee Bar" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-400 group-hover:text-white transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- JORNADA --- */}
      <section id="jornada" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em]">Sua Experiência</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 text-white">A Jornada do Sorriso</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-amber-500/30 to-transparent md:left-1/2 md:-ml-[0.5px]"></div>

            <div className="space-y-24">
              {[
                {
                  step: "01",
                  title: "O Acolhimento",
                  desc: "Sua chegada ao MeDBucal começa com facilidade no estacionamento privativo. Nossa recepção climatizada e um café especial preparam você para um momento de cuidado, longe da pressa.",
                  icon: Coffee
                },
                {
                  step: "02",
                  title: "O Diagnóstico",
                  desc: "Esqueça os moldes de massa desconfortáveis. Utilizamos tecnologia digital e fotografia de alta resolução para entender seu sorriso em detalhes, conversando olho no olho sobre suas expectativas.",
                  icon: Camera
                },
                {
                  step: "03",
                  title: "O Planejamento",
                  desc: "Apresentamos um plano de tratamento personalizado, transparente e visual. Você vê o resultado final antes mesmo de começar, garantindo segurança em cada etapa.",
                  icon: Monitor
                },
                {
                  step: "04",
                  title: "A Transformação",
                  desc: "Execução com 'mão leve' e materiais de classe mundial. Priorizamos procedimentos minimamente invasivos e seu conforto absoluto durante todo o atendimento.",
                  icon: Sparkles
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'} pl-20 md:pl-0`}>
                    <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                    <p className="text-stone-400 font-light leading-relaxed max-w-md ml-auto mr-auto md:mx-0">
                      {item.desc}
                    </p>
                  </div>
                  <div className="relative shrink-0 z-10 w-16 h-16 bg-[#0a0a0a] border border-amber-500/30 rounded-full flex items-center justify-center text-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                    <item.icon size={24} />
                    <div className="absolute -top-8 text-[10px] font-bold text-stone-600 tracking-widest">{item.step}</div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- NOVA SEÇÃO: HISTÓRIAS QUE INSPIRAM --- */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Inspiração</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-12">Histórias que transformam vidas</h2>

          {/* AQUI ESTÁ A MÁGICA: Substituímos o código antigo por este componente */}
          <SmartVideoPlayer src={ASSETS.transformationVideo} poster={ASSETS.heroPoster} />

        </div>
      </section>

      {/* --- DEPOIMENTOS --- */}
      <section id="depoimentos" className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Quote size={32} className="text-amber-500 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-serif text-white">O que dizem nossos pacientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mariana Costa", role: "Empresária", text: "A clínica é simplesmente deslumbrante. Nunca me senti tão acolhida em um dentista. E o resultado das lentes ficou supernatural." },
              { name: "Roberto Silva", role: "Advogado", text: "Profissionalismo impecável. Fiz meus implantes com sedação e não senti absolutamente nada. A recuperação foi fantástica." },
              { name: "Fernanda Lima", role: "Arquiteta", text: "Como arquiteta, sou exigente com detalhes. A Dra. Carolina é uma artista. O ambiente reflete a qualidade do trabalho dela." }
            ].map((depoimento, idx) => (
              <div key={idx} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all duration-300">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-stone-300 font-light italic leading-relaxed mb-6">"{depoimento.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-stone-500 font-serif font-bold">
                    {depoimento.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">{depoimento.name}</p>
                    <p className="text-stone-600 text-xs uppercase tracking-wider">{depoimento.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTATO --- */}
      <section id="contato" className="py-24 md:py-32 relative bg-[#080808] border-t border-white/5 z-10">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="bg-gradient-to-br from-[#0a0a0a] to-black border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Concierge</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Estamos à <br /> sua espera.</h2>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4 text-stone-300">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-stone-500">Telefone</p>
                        <p className="font-serif text-lg hover:text-white transition-colors cursor-pointer">{CONFIG.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-stone-300">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 shrink-0">
                        <Smartphone size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-stone-500">WhatsApp</p>
                        <p className="font-serif text-lg hover:text-white transition-colors cursor-pointer">(19) 3582-1412</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 text-stone-300">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Endereço</p>
                        <p className="font-serif text-lg leading-snug">{CONFIG.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 relative group bg-white">
                  <iframe
                    src={CONFIG.googleMapsEmbed}
                    className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa da Clínica"
                  ></iframe>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
                  >
                    Traçar Rota <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/5 rounded-2xl transform rotate-1 scale-[0.98] z-0"></div>
                <form onSubmit={handleContactSubmit} className="relative z-10 bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 space-y-6 shadow-2xl">
                  <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-amber-500"></span>
                    Solicitar Agendamento
                  </h3>

                  {formError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 flex items-center gap-3 text-red-200 text-xs"
                    >
                      <AlertCircle size={16} className="text-red-500" />
                      {formError}
                    </motion.div>
                  )}

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 pl-2 mb-1 block">Nome Completo</label>
                    <input
                      required
                      name="name"
                      type="text"
                      className="interactive w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 pl-2 mb-1 block">Telefone</label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="interactive w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 pl-2 mb-1 block">Interesse</label>
                    <select
                      name="interest"
                      className="interactive w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option>Avaliação Geral</option>
                      <option>Lentes de Contato</option>
                      <option>Aparelho</option>
                      <option>Outros Assuntos</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-stone-500 pl-2 mb-1 block">Mensagem / Assunto</label>
                    <textarea
                      name="message"
                      rows="3"
                      className="interactive w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="interactive w-full bg-white text-black py-4 rounded-xl font-bold text-xs uppercase tracking-[0.1em] hover:bg-amber-500 hover:text-white transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-4 group"
                  >
                    <div className="flex items-center gap-2 justify-center w-full">
                      {/* SVG do WhatsApp inline para garantir que a cor funcione */}
                      <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span>Enviar no WhatsApp</span>
                    </div>
                  </button>

                  <p className="text-center text-[10px] text-stone-600 mt-4">
                    Seus dados estão protegidos.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER INTELIGENTE --- */}
      <footer className="bg-[#020202] border-t border-white/5 pt-16 pb-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl text-white tracking-widest font-['Cinzel']">DRA. CAROLINA MARELLI</h2>
              <p className="text-[10px] uppercase tracking-widest text-stone-600 mt-2">ODONTOLOGIA ESPECIALIZADA</p>
            </div>

            {/* REDES SOCIAIS (CORRIGIDAS PARA DOURADO NO HOVER) */}
            <div className="flex gap-4">
              <a href="#" className="interactive w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-500 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="interactive w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-500 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="interactive w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-500 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-stone-600">
            <p>&copy; {new Date().getFullYear()} Dra. Carolina Marelli. Todos os direitos reservados.</p>

            <a
              href={CONFIG.developerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex items-center gap-2 hover:text-amber-500 transition-colors group"
            >
              <Code size={12} className="group-hover:text-amber-500" />
              Desenvolvido por <span className="text-stone-400 group-hover:text-white transition-colors">{CONFIG.developerName}</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;