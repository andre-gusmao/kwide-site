'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/utils/assetPath';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Transforme qualquer mesa em um <span className="text-brand-teal">canal inteligente de vendas.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Receba pedidos, pagamentos e gerencie sua operação através da plataforma KWide.
            </motion.p>

            <motion.div className="space-y-4 mb-8" variants={itemVariants}>
              <p className="text-gray-400 flex items-center hover:text-brand-teal transition">
                <span className="text-brand-teal mr-3 text-xl">✓</span> Sem filas
              </p>
              <p className="text-gray-400 flex items-center hover:text-brand-teal transition">
                <span className="text-brand-teal mr-3 text-xl">✓</span> Sem calotes
              </p>
              <p className="text-gray-400 flex items-center hover:text-brand-teal transition">
                <span className="text-brand-teal mr-3 text-xl">✓</span> Sem intermediários
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Link href="/para-empresas" className="btn-primary text-center hover:shadow-lg hover:shadow-brand-teal transition">
                Sou Estabelecimento
              </Link>
              <Link href="/para-clientes" className="btn-secondary text-center hover:shadow-lg hover:shadow-brand-teal transition">
                Sou Cliente
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Mascot */}
          <motion.div
            className="relative h-96 md:h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full h-full max-w-md isolate"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-teal to-transparent opacity-20 rounded-full blur-3xl"></div>
              <Image
                src={assetPath('mascot/Mascote_CUYDE_KWide_2.png')}
                alt="CUYDE Mascote"
                fill
                className="object-contain drop-shadow-2xl [mix-blend-mode:multiply] brightness-110 contrast-125 saturate-110"
                style={{ backgroundColor: 'transparent' }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
