/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Globe, 
  Server, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  ChevronRight, 
  Trophy,
  Users,
  Gamepad2,
  Skull,
  Bomb,
  Activity,
  Box,
  Star,
  Quote
} from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-brand-yellow px-2 py-1 rounded-sm rotate-[-2deg]">
          <span className="text-brand-dark font-black italic tracking-tighter">FF2018</span>
        </div>
        <span className="font-display font-bold uppercase tracking-widest">Nostalgia Edition</span>
      </div>
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-brand-yellow animate-pulse">
        <Activity size={12} /> SERVIDORES ONLINE
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[90vh] pt-24 pb-12 overflow-hidden flex flex-col items-center justify-center text-center">
    {/* Video Background/Top Section */}
    <div className="w-full max-w-lg mx-auto px-6 mb-8 transform -rotate-1">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative aspect-video rounded-2xl overflow-hidden border-2 border-brand-yellow shadow-[0_0_40px_rgba(255,204,0,0.1)] bg-black"
      >
        <video 
          className="w-full h-full object-cover"
          src="/assets/topo-2018.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </div>

    {/* Background Grid */}
    <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-20" />
    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-orange/10 to-transparent pointer-events-none" />
    
    <div className="max-w-lg mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 mb-4 skew-x-[-10deg]">
          O free fire era mais feliz
        </div>
        <h1 className="font-display text-5xl font-black uppercase leading-[0.9] italic mb-6">
          <span className="text-brand-yellow">O MAPA</span> <br />
          BERMUDA <br />
          <span className="text-stroke-1 text-transparent font-black">ERA NOSSO.</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-sm mx-auto mb-8 leading-relaxed text-center">
          Sente o arrepio? É a música original de 2018. 
          <span className="text-brand-yellow font-bold italic text-sm block mt-2"> Lembra de quando ganhar um Booyah era a melhor sensação do mundo? </span> 
          Isso não precisa ser apenas uma lembrança.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex -space-x-3 mb-2">
            {[1,2,3,4,5].map(i => (
              <img key={i} src={`https://picsum.photos/seed/face${i}/48/48`} className="w-10 h-10 rounded-full border-2 border-brand-dark shadow-xl" alt="Survivor" referrerPolicy="no-referrer" />
            ))}
            <div className="w-10 h-10 rounded-full bg-brand-orange border-2 border-brand-dark flex items-center justify-center text-[10px] font-black text-white shadow-xl">+4k</div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic">4.291 Sobreviventes jogando agora</p>
        </div>
      </motion.div>
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-12 animate-bounce flex flex-col items-center gap-2"
    >
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-yellow">Deslize para ver</span>
      <ChevronRight className="rotate-90 text-brand-yellow" size={20} />
    </motion.div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-zinc-900 border border-white/5 p-8 rounded-xl hover:border-brand-yellow/30 transition-all group"
  >
    <div className="w-14 h-14 bg-brand-yellow/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors">
      <Icon className="text-brand-yellow group-hover:text-brand-dark transition-colors" size={30} />
    </div>
    <h3 className="text-2xl font-display font-black uppercase italic mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => (
  <section id="features" className="py-20 bg-brand-dark border-t border-white/5">
    <div className="max-w-lg mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-black uppercase italic mb-4">
          O QUE <span className="text-brand-yellow">VOCÊ GANHA</span>
        </h2>
        <div className="h-1 w-12 bg-brand-yellow mx-auto" />
      </div>

      <div className="grid gap-6">
        <FeatureCard 
          icon={Server}
          title="Servidor Dedicado"
          description="Acompanha script e servidor configurado para habilitar o modo online em 2024 na versão antiga."
          delay={0.1}
        />
        <FeatureCard 
          icon={Globe}
          title="Global & Online"
          description="Nada de bots. Entre em salas reais e sinta a adrenalina do servidor original."
          delay={0.2}
        />
        <FeatureCard 
          icon={Zap}
          title="Puro Nostalgia"
          description="As skins, os sons e a interface original. Tudo pronto para você voltar no tempo."
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-20 bg-zinc-950 relative overflow-hidden">
    <div className="max-w-lg mx-auto px-6 relative z-10 text-center">
      <h2 className="text-4xl font-display font-black uppercase italic mb-8">
        POR QUE <span className="text-brand-yellow">2018?</span>
      </h2>
      <div className="space-y-4 text-left mb-10">
        {[
          "O arrepio da música de entrada",
          "O lobby mais icônico do mobile",
          "O mapa Bermuda sem poluição visual",
          "Mecânica pura, sem skins de habilidade",
          "A simplicidade que a gente amava"
        ].map((text, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight"
          >
            <div className="h-1.5 w-1.5 bg-brand-yellow rotate-45 shrink-0" />
            {text}
          </motion.div>
        ))}
      </div>
      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <video 
          className="w-full h-full object-cover"
          src="/assets/raiz-2018.mp4"
          autoPlay 
          muted 
          loop 
          playsInline
        />
        <div className="absolute inset-0 bg-brand-dark/20" />
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-32 bg-brand-yellow text-brand-dark overflow-hidden relative">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 p-20 opacity-10">
      <Trophy size={400} />
    </div>
    
    <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
      <Bomb size={150} />
    </div>

    <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 bg-brand-dark text-white px-4 py-1 rounded-full text-[10px] font-black uppercase mb-6">
          <span className="h-2 w-2 rounded-full bg-brand-red animate-ping" />
          Airdrop Detectado: Promoção Ativa
        </div>

        <h2 className="text-6xl md:text-8xl font-display font-black uppercase italic leading-none mb-4">
          OFERTA <br />
          <span className="text-stroke-1 text-transparent">LIMITADA</span>
        </h2>
        <p className="text-xl font-bold uppercase tracking-widest mb-12 opacity-80">
          PACK COMPLETO: APK + SERVIDOR ONLINE + TUTORIAL
        </p>

        <div className="bg-brand-dark text-white p-12 rounded-3xl shadow-2xl relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-red px-6 py-2 rounded-full font-black italic text-sm uppercase tracking-wider">
            Melhor Preço do Mercado
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold line-through opacity-50">R$ 97,90</span>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md font-bold uppercase">60% OFF</span>
          </div>
          
          <div className="text-7xl font-display font-black italic mb-8">
            R$ 38,90
          </div>

          <ul className="text-left space-y-4 mb-12">
            {[
              "APK Safe v1.2 (2018)",
              "Acesso ao Servidor Privado Online",
              "Guia de Instalação Passo a Passo",
              "Suporte 24h via Discord",
              "Acesso Vitalício ao Projeto"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <ShieldCheck className="text-brand-yellow shrink-0" size={20} />
                <span className="text-gray-300 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <a 
            href="SUA_URL_DE_PAGAMENTO_OU_CONTATO_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-yellow text-brand-dark py-6 rounded-xl font-black italic text-2xl hover:bg-white active:scale-[0.95] transition-all shadow-[0_15px_40px_rgba(255,204,0,0.4)] flex items-center justify-center gap-4 group"
          >
            EU QUERO MEU BOOYAH DE VOLTA!
            <Trophy className="group-hover:rotate-12 transition-transform" size={24} />
          </a>
          
          <p className="mt-6 text-xs text-gray-500 font-bold uppercase tracking-wider">
            Pagamento Único • Liberação Imediata via E-mail
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-brand-dark px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic mb-4">
          QUEM BAIXOU <span className="text-brand-yellow">APROVOU!</span>
        </h2>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Mais de 4.000 jogadores satisfeitos</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Jhow FPS",
            time: "2 dias atrás",
            text: "Mano, que nostalgia! Voltar pra 2018 com o servidor online é outra parada. O APK roda liso demais no meu J7 Prime.",
            stars: 5,
            tag: "SQUAD_LÍDER"
          },
          {
            name: "Lukinhas2k",
            time: "5 horas atrás",
            text: "Finalmente achei um que realmente funciona o online. Joguei com uns gringos agora pouco, zero lag. Recomendo muito!",
            stars: 5,
            tag: "MESTRE"
          },
          {
            name: "Nanda FF",
            time: "Ontem",
            text: "Saudade desse tempo que era só skill. As skins do passe raiz estão todas lá. Vale cada centavo pela diversão.",
            stars: 5,
            tag: "SOBREVIVENTE"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl relative"
          >
            <Quote className="absolute top-4 right-4 text-brand-yellow opacity-10" size={40} />
            
            <div className="flex gap-1 mb-4">
              {[...Array(item.stars)].map((_, i) => (
                <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" />
              ))}
            </div>

            <p className="text-gray-300 italic mb-6 leading-relaxed">"{item.text}"</p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center font-black text-brand-orange">
                {item.name[0]}
              </div>
              <div>
                <div className="font-display font-bold uppercase italic text-sm">{item.name}</div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 font-bold uppercase">{item.time}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-500" />
                  <span className="text-[10px] text-brand-yellow font-black uppercase tracking-tighter">{item.tag}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-yellow selection:text-brand-dark">
      <Header />
      <Hero />
      <Features />
      <Comparison />
      <Testimonials />
      <Pricing />
    </div>
  );
}
