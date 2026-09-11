'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Cliente Escaneia QR Code',
      description: 'O cliente aponta seu smartphone para o QR Code da mesa',
    },
    {
      number: '02',
      title: 'Acessa o Cardápio Digital',
      description: 'Abre o cardápio completo e personalizado em tempo real',
    },
    {
      number: '03',
      title: 'Faz seu Pedido',
      description: 'Seleciona os itens e quantidades desejadas',
    },
    {
      number: '04',
      title: 'Pagamento Online',
      description: 'Realiza o pagamento de forma segura e instantânea',
    },
    {
      number: '05',
      title: 'Pedido Confirmado',
      description: 'Você recebe a confirmação e já começa a preparar',
    },
    {
      number: '06',
      title: 'Entrega e Satisfação',
      description: 'Produto chega rápido e cliente fica satisfeito',
    },
  ];

  return (
    <section id="como-funciona" className="section-padding bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-400 text-lg">6 passos simples para transformar seu negócio</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, boxShadow: '0 30px 50px rgba(0, 209, 193, 0.15)' }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-brand-teal transition-all h-full">
                <motion.div
                  className="text-6xl font-bold text-brand-teal opacity-15 mb-4"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 -mt-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <motion.svg
                      className="w-8 h-8 text-brand-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
