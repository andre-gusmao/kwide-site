'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Segments = () => {
  const scenarioFiles = [
    'Mascote_CUYDE_KWide_Dashboard.png',
    'Mascote_CUYDE_KWide_Delivery.png',
    'Mascote_CUYDE_KWide_eventos.png',
    'Mascote_CUYDE_KWide_food_truck.png',
    'Mascote_CUYDE_KWide_pizza.png',
    'Mascote_CUYDE_KWide_praia.png',
    'Mascote_CUYDE_KWide_resort.png',
    'Mascote_CUYDE_KWide_restaurante.png',
  ];

  const segments = scenarioFiles.map((fileName) => ({
    fileName,
    label: fileName
      .replace('Mascote_CUYDE_KWide_', '')
      .replace('.png', '')
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
  }));

  return (
    <section id="segmentos" className="section-padding bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Segmentos</h2>
          <p className="text-gray-400 text-lg">Adaptamos para seu negócio</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.fileName}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 209, 193, 0.1)' }}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-brand-teal transition-all text-center"
            >
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden bg-gray-900">
                <Image
                  src={`/images/scenarios/${segment.fileName}`}
                  alt={segment.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg font-bold text-white">{segment.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
