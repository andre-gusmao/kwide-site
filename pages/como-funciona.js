'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function ComoFuncionaPage() {
  return (
    <>
      <Head>
        <title>Como Funciona - KWide</title>
        <meta
          name="description"
          content="Veja como a KWide funciona em 6 passos simples para transformar seu atendimento."
        />
      </Head>

      <div className="bg-brand-navy text-white min-h-screen">
        <Header />
        <main className="pt-20">
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </>
  );
}
