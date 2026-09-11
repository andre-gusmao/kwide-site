'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const highlights = [
  'Operação sem filas e sem intermediários',
  'Experiência visual premium para o cliente final',
  'Gestão centralizada com visão clara da operação',
];

const trustPoints = ['Pagamento seguro', 'Atendimento omnichannel', 'Implantação rápida'];

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="hero-gradient relative min-h-screen overflow-hidden pt-24"
    >
      <div className="absolute inset-0 opacity-70">
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -24, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 left-0 h-72 w-72 rounded-full bg-brand-teal/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -26, 0], y: [0, 24, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl"
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_35%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-16 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
      >
        <div className="relative z-10">
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl"
          >
            <div className="relative h-12 w-40 sm:h-14 sm:w-48">
              <Image
                src="/images/logo/Logotipo_KWide_principal.png"
                alt="Logo principal KWide"
                fill
                priority
                sizes="192px"
                className="object-contain object-left"
              />
            </div>
            <span className="hidden h-10 w-px bg-white/10 sm:block" />
            <p className="hidden max-w-xs text-sm text-slate-300 sm:block">
              Plataforma visual para operações com atendimento fluido, gestão inteligente e percepção premium.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6 inline-flex rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm text-brand-teal shadow-[0_0_30px_rgba(0,209,193,0.12)]">
            Credibilidade para restaurantes, delivery, eventos e hospitalidade
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Transforme a presença digital do seu negócio em uma experiência
            <span className="text-brand-teal"> profissional, confiável e memorável.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            A KWide conecta cardápio, pedido, pagamento e operação em um ambiente visual premium que transmite confiança desde o primeiro toque.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-medium text-slate-200 backdrop-blur-sm"
              >
                {point}
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#segmentos"
              className="btn-primary premium-button text-center text-base shadow-[0_16px_45px_rgba(0,209,193,0.28)]"
            >
              Ver segmentos visuais
            </Link>
            <Link
              href="#dashboard-visual"
              className="btn-secondary premium-button text-center text-base"
            >
              Explorar dashboard
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <motion.div
                key={highlight}
                whileHover={{ y: -6, scale: 1.01 }}
                className="premium-surface rounded-3xl p-5"
              >
                <div className="mb-3 h-10 w-10 rounded-2xl bg-brand-teal/15 text-center text-xl leading-10 text-brand-teal">
                  ✓
                </div>
                <p className="text-sm leading-relaxed text-slate-200">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative flex min-h-[460px] items-center justify-center lg:min-h-[620px]"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, -2, 0, 2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-x-8 top-4 bottom-12 rounded-[2rem] bg-gradient-to-br from-brand-teal/15 via-transparent to-white/10 blur-2xl"
          />

          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="premium-surface relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_80px_rgba(11,35,65,0.45)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,209,193,0.18),transparent_45%,rgba(255,255,255,0.06))]" />
            <div className="relative flex min-h-[500px] items-end justify-center">
              <motion.div
                animate={{ y: [0, -26, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[420px] w-full max-w-md"
              >
                <Image
                  src="/images/mascot/Mascote%20CUYDE%20KWide%202.png"
                  alt="Mascote principal da KWide em destaque"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-contain drop-shadow-[0_24px_45px_rgba(0,209,193,0.25)]"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.03, rotate: 1.5 }}
              className="premium-surface absolute right-4 top-4 w-44 rounded-3xl p-3 sm:w-52"
            >
              <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/scenarios/Mascote%20CUYDE%20KWide%20Dashboard.png"
                  alt="Prévia do dashboard visual da KWide"
                  fill
                  loading="lazy"
                  sizes="208px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/35 to-transparent" />
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-brand-teal">Dashboard live</p>
              <p className="mt-1 text-sm text-white">Visão operacional clara com interface pronta para decisão rápida.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="premium-surface absolute bottom-4 left-4 max-w-[240px] rounded-3xl p-4"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Percepção de marca</p>
              <p className="mt-2 text-base font-semibold text-white">Design consistente para inspirar confiança em todos os pontos de contato.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
