'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemsSection from '@/components/ProblemsSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Segments from '@/components/Segments';
import Testimonials from '@/components/Testimonials';
import VisualShowcase from '@/components/VisualShowcase';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>KWide - Transformando qualquer mesa em um canal inteligente de vendas</title>
        <meta
          name="description"
          content="KWide: Plataforma de vendas via QR Code. Receba pedidos, pagamentos e gerencie sua operação sem intermediários."
        />
        <meta name="keywords" content="QR Code, Vendas, Pedidos Online, Pagamentos Digitais, Delivery" />
      </Head>

      <div className="bg-brand-navy text-white min-h-screen">
        <Header />
        <Hero />
        <ProblemsSection />
        <HowItWorks />
        <Benefits />
        <Segments />
        <VisualShowcase />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </>
  );
}
