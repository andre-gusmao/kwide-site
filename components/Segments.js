'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const segments = [
  {
    name: 'Restaurante',
    description: 'Experiência refinada para salão, cardápio e pagamento no mesmo fluxo.',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20restaurante.png',
  },
  {
    name: 'Pizza',
    description: 'Pedidos com agilidade e visual atrativo para aumentar conversão.',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20pizza.png',
  },
  {
    name: 'Delivery',
    description: 'Operação omnichannel com comunicação clara e percepção profissional.',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20Delivery.png',
  },
  {
    name: 'Food Truck',
    description: 'Atendimento rápido para operações móveis sem perder identidade premium.',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20food%20truck.png',
  },
  {
    name: 'Eventos',
    description: 'Fluxo digital para grandes volumes com experiência consistente.',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20eventos.png',
  },
  {
    name: 'Resort',
    description: 'Hospitalidade com jornadas digitais elegantes e fáceis de usar.',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20resort.png',
  },
  {
    name: 'Praia',
    description: 'Autoatendimento intuitivo em ambientes descontraídos e de alta demanda.',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20praia.png',
  },
  {
    name: 'Dashboard',
    description: 'Gestão visual em tempo real para acompanhar pedidos, pagamentos e performance.',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20Dashboard.png',
  },
  {
    name: 'Atendimento Inteligente',
    description: 'A mascote reforça proximidade, tecnologia e uma identidade de marca memorável.',
    image: '/images/mascot/Mascote%20CUYDE%20KWide%202.png',
  },
];

const Segments = () => {
  return (
    <section id="segmentos" className="section-padding relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,209,193,0.12),_transparent_48%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm text-brand-teal">
            Segmentos com presença visual premium
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">A mesma plataforma, múltiplos cenários de alta credibilidade</h2>
          <p className="mt-4 text-lg text-slate-300">
            Cada ambiente reforça a versatilidade da KWide com imagens contextuais, acabamento refinado e navegação clara para o cliente final.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {segments.map((segment, index) => (
            <motion.article
              key={segment.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -0.75 : 0.75 }}
              className="group premium-surface overflow-hidden rounded-[1.75rem] border border-white/10"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.45 }} className="h-full w-full">
                  <Image
                    src={segment.image}
                    alt={`Segmento ${segment.name} da plataforma KWide`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/35 to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-brand-navy/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-brand-teal backdrop-blur-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{segment.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{segment.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
