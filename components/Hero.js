'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const assetPath = (folder, file) => `/images/${folder}/${encodeURIComponent(file)}`;

const trustPoints = [
  'Operação sem filas e sem atritos',
  'Pagamentos seguros e sem intermediários',
  'Gestão visual para múltiplos segmentos',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Hero = () => {
  return (
    <section id="hero" className="hero-gradient hero-premium-background relative overflow-hidden pt-28 pb-16 md:pb-24">
      <div className="absolute inset-0 opacity-70">
        <motion.div
          animate={{ x: [0, 40, -10, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-brand-teal/30 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 10, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-4rem] top-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-teal/20 blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
      >
        <div>
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-brand-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl"
          >
            <motion.div
              animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-10 w-10"
            >
              <Image
                src={assetPath('logo', 'Logotipo_KWide_principal.png')}
                alt="Logo KWide"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="font-semibold tracking-[0.18em] text-white/90 uppercase">Plataforma visual premium</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl xl:text-7xl"
          >
            A credibilidade da sua operação começa em uma{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-teal via-cyan-300 to-white bg-clip-text text-transparent">
              experiência visual impecável.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            A KWide profissionaliza pedidos, pagamentos e gestão com uma jornada digital elegante,
            rápida e confiável para restaurantes, delivery, eventos, resort e operações em expansão.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 shadow-[0_16px_40px_rgba(11,35,65,0.25)] backdrop-blur-md"
              >
                <span className="mb-2 block text-lg text-brand-teal">✓</span>
                {point}
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/para-empresas"
              className="btn-primary group inline-flex items-center justify-center gap-2 text-center shadow-[0_18px_45px_rgba(0,209,193,0.35)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,209,193,0.45)]"
            >
              Agendar demonstração
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#segmentos"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-center shadow-[0_14px_32px_rgba(11,35,65,0.25)] hover:-translate-y-1 hover:bg-brand-teal hover:text-brand-navy"
            >
              Explorar segmentos
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative mx-auto flex w-full max-w-2xl items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 1.8, 0, -1.8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full"
          >
            <div className="absolute inset-x-10 bottom-6 top-10 rounded-[2rem] bg-gradient-to-br from-brand-teal/25 via-cyan-300/15 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_40px_90px_rgba(3,10,25,0.55)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_38%)]" />
              <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                KWide Experience
              </div>
              <div className="relative aspect-[4/4.2] w-full">
                <Image
                  src={assetPath('mascot', 'Mascote CUYDE KWide 2.png')}
                  alt="Mascote CUYDE apresentando a plataforma KWide"
                  fill
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-contain drop-shadow-[0_30px_60px_rgba(0,209,193,0.28)]"
                  priority
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-6 max-w-[13rem] rounded-2xl border border-white/10 bg-brand-navy/75 px-4 py-3 text-sm text-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
              >
                Menos atrito no atendimento. Mais confiança na experiência do cliente.
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
