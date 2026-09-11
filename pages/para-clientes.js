'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ParaClientes() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Rápido',
      description: 'Realize seu pedido em segundos sem filas de espera',
    },
    {
      icon: '🔒',
      title: 'Seguro',
      description: 'Seus dados e pagamentos são protegidos com segurança',
    },
    {
      icon: '💝',
      title: 'Promoções',
      description: 'Acesse ofertas exclusivas e ganhe pontos de fidelização',
    },
    {
      icon: '📍',
      title: 'Localização',
      description: 'Encontre seus restaurantes favoritos perto de você',
    },
    {
      icon: '⭐',
      title: 'Avaliações',
      description: 'Leia opiniões de outros clientes antes de fazer seu pedido',
    },
    {
      icon: '🎯',
      title: 'Personalizado',
      description: 'Customize seu pedido do jeito que você gosta',
    },
  ];

  const howToUse = [
    {
      step: '1',
      title: 'Escaneie o QR Code',
      description: 'Aponte sua câmera para o QR Code disponível na mesa',
    },
    {
      step: '2',
      title: 'Explore o Cardápio',
      description: 'Veja fotos, descrições e preços de todos os itens',
    },
    {
      step: '3',
      title: 'Monte seu Pedido',
      description: 'Selecione os itens e personalize conforme desejar',
    },
    {
      step: '4',
      title: 'Faça o Pagamento',
      description: 'Pague de forma segura diretamente pelo app',
    },
    {
      step: '5',
      title: 'Acompanhe',
      description: 'Acompanhe seu pedido em tempo real',
    },
    {
      step: '6',
      title: 'Aproveite!',
      description: 'Receba seu pedido pronto e desfrute da experiência',
    },
  ];

  return (
    <>
      <Head>
        <title>Para Clientes - KWide</title>
        <meta name="description" content="Peça online sem filas, pagamento seguro e experiência rápida" />
      </Head>

      <div className="bg-brand-navy text-white min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Peça sem <span className="text-brand-teal">filas</span>, com segurança
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Escaneie o QR Code, escolha seus itens favoritos e pague de forma segura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">Baixar App</button>
              <button className="btn-secondary text-lg px-8 py-4">Saiba Mais</button>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Por que usar KWide?</h2>
              <p className="text-gray-400 text-lg">A melhor experiência de pedidos online</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-brand-teal transition-all"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="section-padding bg-brand-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Como Usar?</h2>
              <p className="text-gray-400 text-lg">Simples, rápido e intuitivo</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {howToUse.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-8 rounded-lg border border-gray-700"
                >
                  <div className="text-6xl font-bold text-brand-teal mb-4 opacity-20">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 -mt-8">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
