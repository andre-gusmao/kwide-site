'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const assetPath = (folder, file) => `/images/${folder}/${encodeURIComponent(file)}`;

const segments = [
  {
    name: 'Restaurante',
    description: 'Atendimento de mesa mais elegante, rápido e integrado ao pagamento.',
    image: 'Mascote CUYDE KWide restaurante.png',
  },
  {
    name: 'Pizza',
    description: 'Pedidos fluidos e mais previsibilidade para horários de pico.',
    image: 'Mascote CUYDE KWide pizza.png',
  },
  {
    name: 'Delivery',
    description: 'Canal próprio com jornada confiável, direta e sem dependência de terceiros.',
    image: 'Mascote CUYDE KWide Delivery.png',
  },
  {
    name: 'Food Truck',
    description: 'Venda ágil em operações móveis com menos fila e mais giro.',
    image: 'Mascote CUYDE KWide food truck.png',
  },
  {
    name: 'Eventos',
    description: 'Escala de atendimento para grandes fluxos com experiência premium.',
    image: 'Mascote CUYDE KWide eventos.png',
  },
  {
    name: 'Resort',
    description: 'Consumo em diferentes ambientes com visual sofisticado e organizado.',
    image: 'Mascote CUYDE KWide resort.png',
  },
  {
    name: 'Praia',
    description: 'Pedidos ao ar livre com conveniência, autonomia e pagamentos rápidos.',
    image: 'Mascote CUYDE KWide praia.png',
  },
  {
    name: 'Dashboard',
    description: 'Decisões guiadas por dados e visão operacional em tempo real.',
    image: 'Mascote CUYDE KWide Dashboard.png',
  },
  {
    name: 'Marca KWide',
    description: 'Uma apresentação visual coesa para reforçar confiança em qualquer operação.',
    image: '../logo/Logotipo_KWide_principal.png',
    isBrandCard: true,
  },
];

const imageSrc = (image) => {
  if (image.startsWith('../logo/')) {
    return assetPath('logo', image.replace('../logo/', ''));
  }

  return assetPath('scenarios', image);
};

const SegmentsShowcase = () => {
  return (
    <section id="segmentos" className="section-padding relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,209,193,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
            Segmentos com prova visual
          </span>
          <h2 className="text-4xl font-black text-white md:text-5xl">A mesma plataforma, múltiplos cenários de excelência</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Cada ambiente comunica versatilidade, padronização e credibilidade para vender mais com menos atrito.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {segments.map((segment, index) => (
            <motion.article
              key={segment.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, boxShadow: '0 30px 80px rgba(0, 209, 193, 0.18)' }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-[0_22px_60px_rgba(2,8,23,0.35)] backdrop-blur-sm"
            >
              <div className="relative aspect-[1.08/1] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: segment.isBrandCard ? 0 : 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-full w-full"
                >
                  <Image
                    src={imageSrc(segment.image)}
                    alt={`Visual KWide para ${segment.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-700 ${segment.isBrandCard ? 'bg-white/90 object-contain p-8' : ''}`}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#04101e] via-[#04101e]/55 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    {segment.isBrandCard ? 'Confiança visual' : 'Cenário real'}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{segment.name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-200 transition duration-500 group-hover:text-white">
                    {segment.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsShowcase;
