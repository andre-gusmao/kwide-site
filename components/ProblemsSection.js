'use client';

import { motion } from 'framer-motion';

const ProblemsSection = () => {
  const problems = [
    { icon: '🚫', title: 'Calotes', description: 'Evite perdas com pagamentos não realizados' },
    { icon: '⏳', title: 'Filas', description: 'Elimine filas longas no atendimento' },
    { icon: '💬', title: 'WhatsApp', description: 'Saia da dependência de atendimento por mensagem' },
    { icon: '☎️', title: 'Telefone', description: 'Reduza ligações para pedidos' },
    { icon: '🏢', title: 'Marketplaces', description: 'Tenha seu próprio canal de vendas' },
    { icon: '📄', title: 'Cardápios', description: 'Atualize preços em tempo real' },
    { icon: '❤️', title: 'Fidelização', description: 'Fidelize seus clientes' },
    { icon: '💰', title: 'Custos', description: 'Reduza custos operacionais' },
    { icon: '📊', title: 'Indicadores', description: 'Tenha dados sobre sua operação' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
            Os Problemas do Mercado
          </h2>
          <p className="text-gray-400 text-lg">Que você não precisa mais enfrentar</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 209, 193, 0.1)' }}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-brand-teal transition-colors"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;
