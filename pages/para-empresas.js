'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ParaEmpresas() {
  const features = [
    {
      icon: '📊',
      title: 'Dashboard Inteligente',
      description: 'Acompanhe vendas, pedidos e clientes em tempo real com gráficos intuitivos',
    },
    {
      icon: '🎨',
      title: 'Cardápio Personalizado',
      description: 'Customize seu cardápio com imagens, descrições e promoções',
    },
    {
      icon: '💳',
      title: 'Pagamentos Seguros',
      description: 'Receba pagamentos de forma segura em múltiplas formas',
    },
    {
      icon: '📱',
      title: 'App Mobile',
      description: 'Gerencie seu negócio de qualquer lugar pelo app',
    },
    {
      icon: '👥',
      title: 'Gestão de Clientes',
      description: 'Conheça melhor seus clientes e crie relacionamentos duradouros',
    },
    {
      icon: '📈',
      title: 'Relatórios Detalhados',
      description: 'Acesse relatórios completos sobre seu negócio',
    },
  ];

  const pricing = [
    {
      name: 'Básico',
      price: 'R$ 99',
      period: '/mês',
      description: 'Perfeito para iniciantes',
      features: [
        'Até 50 itens no cardápio',
        'QR Code ilimitados',
        'Dashboard básico',
        'Suporte por email',
      ],
      cta: 'Começar Agora',
    },
    {
      name: 'Profissional',
      price: 'R$ 249',
      period: '/mês',
      description: 'Mais vendas, mais lucro',
      features: [
        'Cardápio ilimitado',
        'Dashboard completo',
        'Relatórios avançados',
        'Suporte prioritário',
        'Integrações',
      ],
      cta: 'Contratar Agora',
      highlighted: true,
    },
    {
      name: 'Empresarial',
      price: 'Sob Consulta',
      period: '',
      description: 'Para grandes operações',
      features: [
        'Múltiplas unidades',
        'API customizada',
        'Suporte dedicado',
        'Treinamento incluído',
        'Todas as features',
      ],
      cta: 'Falar com Vendas',
    },
  ];

  return (
    <>
      <Head>
        <title>Para Empresas - KWide</title>
        <meta name="description" content="Solução para estabelecimentos aumentarem vendas e reduzirem custos operacionais" />
      </Head>

      <div className="bg-brand-navy text-white min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 left-10 w-72 h-72 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              className="absolute bottom-20 right-10 w-72 h-72 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl"
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Aumente suas vendas em até <span className="text-brand-teal">40%</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Solução completa para estabelecimentos de comida e bebida transformarem sua operação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 hover:shadow-lg hover:shadow-brand-teal"
              >
                Começar Teste Gratuito
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4 hover:shadow-lg hover:shadow-brand-teal"
              >
                Ver Demo
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Dashboard Scene */}
        <section className="section-padding bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-96 md:h-full rounded-xl overflow-hidden shadow-2xl border border-brand-teal border-opacity-30"
            >
              <Image
                src="/images/scenarios/Dashboard.png"
                alt="Dashboard KWide"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-brand-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Recursos Poderosos</h2>
              <p className="text-gray-400 text-lg">Tudo que você precisa para gerenciar seu negócio</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -15, boxShadow: '0 30px 50px rgba(0, 209, 193, 0.15)' }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-brand-teal transition-all"
                >
                  <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Planos e Preços</h2>
              <p className="text-gray-400 text-lg">Escolha o plano ideal para seu negócio</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -20, boxShadow: '0 40px 60px rgba(0, 209, 193, 0.2)' }}
                  className={`rounded-lg p-8 transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-brand-teal to-cyan-600 text-brand-navy ring-2 ring-brand-teal scale-105'
                      : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-6 ${ plan.highlighted ? 'text-brand-navy opacity-90' : 'text-gray-400'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className={plan.highlighted ? 'text-brand-navy opacity-90' : 'text-gray-400'}>{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="mr-3 text-lg">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-bold transition-all ${
                      plan.highlighted
                        ? 'bg-brand-navy text-brand-teal hover:opacity-90 shadow-lg'
                        : 'bg-brand-teal text-brand-navy hover:opacity-90'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
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
