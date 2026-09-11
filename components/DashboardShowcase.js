'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const assetPath = (folder, file) => `/images/${folder}/${encodeURIComponent(file)}`;

const dashboardHighlights = [
  'Visão operacional em tempo real para pedidos, desempenho e fluxo.',
  'Camada visual sofisticada para transmitir maturidade digital ao cliente.',
  'Base pronta para crescer em restaurantes, eventos, delivery e hospitalidade.',
];

const DashboardShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const translateY = useTransform(scrollYProgress, [0, 1], [50, -40]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-[#071426]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,209,193,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.16),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <span className="mb-4 inline-flex rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
            Dashboard em destaque
          </span>
          <h2 className="text-4xl font-black text-white md:text-5xl">Controle visual para decisões rápidas e uma operação mais confiável</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A KWide centraliza experiência do cliente, inteligência operacional e apresentação premium em uma única plataforma.
          </p>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            style={{ y: translateY }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-[0_28px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#071426]/85 via-transparent to-brand-teal/15" />
            <div className="relative aspect-[1.25/1]">
              <Image
                src={assetPath('scenarios', 'Mascote CUYDE KWide Dashboard.png')}
                alt="Dashboard KWide em destaque"
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_26px_70px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-10"
          >
            <h3 className="text-3xl font-black text-white">Dados, atendimento e conversão em perfeita sintonia</h3>
            <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
              O dashboard reforça a percepção de solidez da KWide: tudo o que a operação precisa para vender melhor, acompanhar indicadores e manter uma jornada moderna do pedido ao pagamento.
            </p>

            <div className="mt-8 space-y-4">
              {dashboardHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-brand-navy/45 px-4 py-4"
                >
                  <span className="mt-0.5 text-lg text-brand-teal">◆</span>
                  <p className="text-slate-200">{highlight}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/para-empresas"
                className="btn-primary inline-flex items-center gap-2 shadow-[0_16px_40px_rgba(0,209,193,0.35)] hover:-translate-y-1"
              >
                Ver solução para empresas
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
