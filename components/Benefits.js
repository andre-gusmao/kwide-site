'use client';

import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      icon: '📱',
      title: 'Para Estabelecimentos',
      items: [
        'Aumentar vendas em até 40%',
        'Reduzir custos operacionais',
        'Melhorar a experiência do cliente',
        'Dados em tempo real',
        'Gestão simples e intuitiva',
      ],
    },
    {
      icon: '👥',
      title: 'Para Clientes',
      items: [
        'Sem filas de espera',
        'Cardápio sempre atualizado',
        'Pagamento seguro',
        'Acompanhar o pedido',
        'Programas de fidelização',
      ],
    },
  ];

  return (
    <section className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Benefícios
          </h2>
          <p className="text-gray-400 text-lg">Ganhos para todos os lados</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-lg border border-brand-teal border-opacity-30"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-6">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-brand-teal mr-3 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
