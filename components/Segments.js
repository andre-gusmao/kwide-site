'use client';

import { motion } from 'framer-motion';

const Segments = () => {
  const segments = [
    {
      icon: '🍔',
      name: 'Restaurantes',
      description: 'Aumente vendas e reduza custos operacionais',
    },
    {
      icon: '☕',
      name: 'Cafeteria',
      description: 'Atenda mais clientes de forma rápida e eficiente',
    },
    {
      icon: '🍕',
      name: 'Pizzaria',
      description: 'Gerencie pedidos de forma inteligente',
    },
    {
      icon: '🍜',
      name: 'Snack Bar',
      description: 'Aumente a produtividade e reduz filas',
    },
    {
      icon: '🍰',
      name: 'Confeitaria',
      description: 'Receba pedidos customizados e pré-pagos',
    },
    {
      icon: '🧋',
      name: 'Bebidas',
      description: 'Cardápio digital sempre atualizado',
    },
    {
      icon: '🥗',
      name: 'Saudável',
      description: 'Informe nutrientes e ingredientes facilmente',
    },
    {
      icon: '🌮',
      name: 'Comida Rápida',
      description: 'Acelere o atendimento sem calotes',
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Segmentos
          </h2>
          <p className="text-gray-400 text-lg">Adaptamos para seu negócio</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 209, 193, 0.1)' }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-brand-teal transition-all text-center cursor-pointer"
            >
              <div className="text-4xl mb-3">{segment.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{segment.name}</h3>
              <p className="text-gray-400 text-sm">{segment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
