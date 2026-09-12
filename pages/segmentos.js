'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Segments from '@/components/Segments';
import Footer from '@/components/Footer';

export default function SegmentosPage() {
  return (
    <>
      <Head>
        <title>Segmentos - KWide</title>
        <meta
          name="description"
          content="Conheça os segmentos atendidos pela KWide com cenários e experiências personalizadas."
        />
      </Head>

      <div className="bg-brand-navy text-white min-h-screen">
        <Header />
        <main className="pt-20">
          <Segments />
        </main>
        <Footer />
      </div>
    </>
  );
}
