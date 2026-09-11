'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemsSection from '@/components/ProblemsSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import SegmentsShowcase from '@/components/SegmentsShowcase';
import MascotCarousel from '@/components/MascotCarousel';
import DashboardShowcase from '@/components/DashboardShowcase';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return (
    <>
      <Head>
        <title>KWide | Plataforma visual premium para pedidos, pagamentos e gestão</title>
        <meta
          name="description"
          content="A KWide transforma restaurantes, delivery, eventos, resort e operações modernas com uma plataforma visual premium para pedidos, pagamentos e gestão em tempo real."
        />
        <meta
          name="keywords"
          content="KWide, QR Code, cardápio digital, delivery, restaurante, resort, dashboard, pedidos online, pagamentos digitais"
        />
        <meta property="og:title" content="KWide | Plataforma visual premium para vendas e operação" />
        <meta
          property="og:description"
          content="Conheça a plataforma KWide com experiência premium para atendimento, pedidos, pagamentos e visão operacional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
      </Head>

      <div className="min-h-screen bg-brand-navy text-white">
        <Header />
        <Hero />
        <SegmentsShowcase />
        <MascotCarousel />
        <DashboardShowcase />
        <ProblemsSection />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </>
  );
}
