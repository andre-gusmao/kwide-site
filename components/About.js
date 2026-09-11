'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  return (
    <section className="section-padding bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre a KWide
            </h2>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Somos uma plataforma inovadora que transforma qualquer mesa em um canal inteligente de vendas.
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Desenvolvida para atender os desafios reais dos estabelecimentos de comida e bebida, a KWide elimina
              filas, calotes e intermediários.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-brand-teal mr-4 text-2xl">🎯</div>
                <div>
                  <h3 className="font-bold text-white mb-1">Missão</h3>
                  <p className="text-gray-400">Transformar o jeito de vender nos estabelecimentos de comida e bebida</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-brand-teal mr-4 text-2xl">👁️</div>
                <div>
                  <h3 className="font-bold text-white mb-1">Visão</h3>
                  <p className="text-gray-400">Ser a plataforma padrão para vendas no setor de Food & Beverage</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-brand-teal mr-4 text-2xl">💡</div>
                <div>
                  <h3 className="font-bold text-white mb-1">Valores</h3>
                  <p className="text-gray-400">Inovação, transparência, qualidade e atendimento</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="#" className="btn-primary">Saiba mais</Link>
              <Link href="#" className="btn-secondary">Contato</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-teal to-transparent opacity-10 rounded-full blur-3xl"></div>
            <div className="w-full h-full bg-gradient-to-br from-brand-teal via-brand-navy to-gray-900 rounded-lg flex items-center justify-center">
              <p className="text-white text-center text-2xl font-bold">📊 Plataforma KWide</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
