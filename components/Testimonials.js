'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Dono de Restaurante',
      content: 'Aumentei minhas vendas em 35% depois que comecei a usar KWide. Meus clientes adoram a praticidade.',
      avatar: '👨‍💼',
    },
    {
      name: 'Maria Santos',
      role: 'Gerente de Cafeteria',
      content: 'Reducimos drasticamente o tempo de espera. Os clientes agora podem pedir pelo celular e retiram na hora.',
      avatar: '👩‍💼',
    },
    {
      name: 'Pedro Costa',
      role: 'Proprietário de Pizzaria',
      content: 'Nunca mais tive problemas com calotes. O pagamento online garante o recebimento imediato.',
      avatar: '👨‍🍳',
    },
  ];

  const [current, setCurrent] = useState(0);

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
            O que nossos clientes falam
          </h2>
          <p className="text-gray-400 text-lg">Histórias de sucesso reais</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          key={current}
          className="bg-gradient-to-r from-gray-800 to-gray-900 p-12 rounded-lg border border-brand-teal border-opacity-30 text-center max-w-2xl mx-auto"
        >
          <div className="text-6xl mb-4">{testimonials[current].avatar}</div>
          <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
            "{testimonials[current].content}"
          </p>
          <h3 className="text-xl font-bold text-white">{testimonials[current].name}</h3>
          <p className="text-brand-teal">{testimonials[current].role}</p>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? 'bg-brand-teal w-8' : 'bg-gray-600'
                }`}
              ></button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
