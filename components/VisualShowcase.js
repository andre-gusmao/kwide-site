'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const mascotSlides = [
  {
    title: 'Recepção acolhedora',
    description: 'Mascote principal reforçando proximidade e tecnologia em uma entrada premium.',
    image: '/images/mascot/Mascote%20CUYDE%20KWide%202.png',
  },
  {
    title: 'Atendimento de bandeja',
    description: 'Visual elegante para operações que precisam unir agilidade e hospitalidade.',
    image: '/images/mascot/Mascote%20CUYDE%20KWide%20bandeja.png',
  },
  {
    title: 'Experiência no salão',
    description: 'Uma presença que comunica conforto, organização e eficiência operacional.',
    image: '/images/mascot/Mascote%20CUYDE%20KWide%20cadeira.png',
  },
  {
    title: 'Pedido pelo celular',
    description: 'Representação visual ideal para autoatendimento, QR Code e jornada mobile.',
    image: '/images/mascot/Mascote%20CUYDE%20KWide%20celular.png',
  },
  {
    title: 'Entrega em movimento',
    description: 'A KWide se adapta a operações de alta velocidade com linguagem visual consistente.',
    image: '/images/mascot/Mascote%20CUYDE%20KWide%20moto.png',
  },
  {
    title: 'Gestão conectada',
    description: 'O ecossistema visual fecha o ciclo com um dashboard pronto para a tomada de decisão.',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20Dashboard.png',
  },
];

const galleryItems = [
  {
    title: 'Restaurante',
    category: 'Segmentos',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20restaurante.png',
    description: 'Operação de salão com identidade sofisticada.',
  },
  {
    title: 'Pizza',
    category: 'Segmentos',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20pizza.png',
    description: 'Fluxo digital desenhado para pedidos de alta recorrência.',
  },
  {
    title: 'Delivery',
    category: 'Delivery',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20Delivery.png',
    description: 'Atendimento eficiente para retirada e entrega.',
  },
  {
    title: 'Food Truck',
    category: 'Segmentos',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20food%20truck.png',
    description: 'Mobilidade com atendimento profissional.',
  },
  {
    title: 'Eventos',
    category: 'Eventos',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20eventos.png',
    description: 'Escala visual para ambientes de alto fluxo.',
  },
  {
    title: 'Resort',
    category: 'Hospitalidade',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20resort.png',
    description: 'Experiência premium para jornadas completas de hospedagem.',
  },
  {
    title: 'Praia',
    category: 'Hospitalidade',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20praia.png',
    description: 'Pedido rápido em ambientes abertos e dinâmicos.',
  },
  {
    title: 'Mascote no celular',
    category: 'Mascotes',
    image: '/images/mascot/Mascote%20CUYDE%20KWide%20celular.png',
    description: 'Aproximação com o cliente a partir do mobile.',
  },
  {
    title: 'Mascote em movimento',
    category: 'Mascotes',
    image: '/images/mascot/Mascote%20CUYDE%20KWide%20moto.png',
    description: 'Expressa velocidade e autonomia operacional.',
  },
  {
    title: 'Dashboard',
    category: 'Dashboard',
    image: '/images/scenarios/Mascote%20CUYDE%20KWide%20Dashboard.png',
    description: 'Controle visual e acompanhamento da operação em tempo real.',
  },
];

const galleryFilters = ['Todos', 'Segmentos', 'Delivery', 'Eventos', 'Hospitalidade', 'Mascotes', 'Dashboard'];

const dashboardHighlights = [
  'Leitura rápida da operação com contexto visual forte',
  'Gradientes e contraste pensados para transmitir solidez',
  'Jornada conectada entre pedido, pagamento e acompanhamento',
];

const VisualShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    if (isCarouselPaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % mascotSlides.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [isCarouselPaused]);

  useEffect(() => {
    if (!lightboxItem) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxItem(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem]);

  const filteredGalleryItems = useMemo(() => {
    if (activeFilter === 'Todos') {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const nextSlide = () => setCurrentSlide((previous) => (previous + 1) % mascotSlides.length);
  const previousSlide = () => setCurrentSlide((previous) => (previous - 1 + mascotSlides.length) % mascotSlides.length);

  return (
    <>
      <section className="section-padding relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,209,193,0.16),_transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left"
          >
            <div>
              <span className="inline-flex rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm text-brand-teal">
                Carousel de mascotes
              </span>
              <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Contextos visuais que humanizam a plataforma</h2>
            </div>
            <p className="max-w-2xl text-lg text-slate-300">
              Cada slide destaca uma aplicação da marca KWide com movimento suave, navegação controlada e pausa automática ao hover.
            </p>
          </motion.div>

          <div
            className="premium-surface relative overflow-hidden rounded-[2rem] border border-white/10 p-4 md:p-6"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-6 p-2 md:p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mascotSlides[currentSlide].title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-sm uppercase tracking-[0.28em] text-brand-teal">Slide {String(currentSlide + 1).padStart(2, '0')}</p>
                    <h3 className="mt-4 text-3xl font-semibold text-white">{mascotSlides[currentSlide].title}</h3>
                    <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
                      {mascotSlides[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={previousSlide}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-brand-teal hover:text-brand-teal"
                    aria-label="Slide anterior"
                  >
                    ← Anterior
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-brand-teal hover:text-brand-teal"
                    aria-label="Próximo slide"
                  >
                    Próximo →
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {mascotSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === currentSlide ? 'w-10 bg-brand-teal' : 'w-2.5 bg-white/25 hover:bg-white/40'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-brand-navy/90 via-brand-navy/70 to-brand-teal/25">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mascotSlides[currentSlide].image}
                    initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.03, rotate: 1.5 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_42%)]" />
                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={mascotSlides[currentSlide].image}
                        alt={mascotSlides[currentSlide].title}
                        fill
                        priority={currentSlide === 0}
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-contain p-6 drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="inline-flex rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm text-brand-teal">
              Galeria visual
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Showcase filtrável para apresentar a versatilidade da KWide</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
              Uma galeria com imagens grandes, filtros por categoria e lightbox para destacar cada cenário com acabamento profissional.
            </p>
          </motion.div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? 'bg-brand-teal text-brand-navy shadow-[0_10px_30px_rgba(0,209,193,0.24)]'
                    : 'border border-white/10 bg-white/5 text-slate-200 hover:border-brand-teal/30 hover:text-brand-teal'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredGalleryItems.map((item, index) => (
              <motion.button
                key={`${item.title}-${item.image}`}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                whileHover={{ y: -8, scale: 1.01 }}
                onClick={() => setLightboxItem(item)}
                className="group premium-surface text-left overflow-hidden rounded-[1.75rem] border border-white/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05, rotate: 0.6 }} transition={{ duration: 0.4 }} className="h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-brand-navy/75 px-3 py-1 text-xs uppercase tracking-[0.24em] text-brand-teal backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      Abrir
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section id="dashboard-visual" className="section-padding relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(0,209,193,0.14),_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            whileHover={{ y: -6 }}
            className="premium-surface relative overflow-hidden rounded-[2rem] border border-white/10 p-4 sm:p-6"
          >
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/scenarios/Mascote%20CUYDE%20KWide%20Dashboard.png"
                alt="Dashboard visual da plataforma KWide"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-brand-navy/30 to-brand-teal/30" />
            </div>
            <div className="absolute left-8 top-8 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-brand-teal backdrop-blur-md">
              Dashboard visual
            </div>
            <div className="absolute bottom-8 left-8 max-w-sm rounded-3xl border border-white/10 bg-brand-navy/70 p-5 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-300">Visibilidade operacional</p>
              <p className="mt-2 text-base font-semibold text-white">Uma composição visual que transmite controle, organização e capacidade de escala.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm text-brand-teal">
              Destaque do produto
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Dashboard com presença visual forte para sustentar decisões rápidas</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              O painel da KWide ganha protagonismo com contraste elegante, gradientes da marca e uma apresentação que valoriza o produto como solução madura e confiável.
            </p>

            <div className="mt-8 space-y-4">
              {dashboardHighlights.map((highlight) => (
                <motion.div
                  key={highlight}
                  whileHover={{ x: 6 }}
                  className="premium-surface flex items-start gap-4 rounded-3xl p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-teal/15 text-brand-teal">
                    ✦
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/90 px-4 py-10 backdrop-blur-md"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-brand-navy shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-brand-navy/80 px-3 py-2 text-sm text-white backdrop-blur-sm transition hover:border-brand-teal hover:text-brand-teal"
                aria-label="Fechar lightbox"
              >
                Fechar ✕
              </button>
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[340px] lg:min-h-[640px]">
                  <Image
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-sm uppercase tracking-[0.28em] text-brand-teal">{lightboxItem.category}</p>
                  <h3 className="mt-4 text-3xl font-semibold text-white">{lightboxItem.title}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-slate-300">{lightboxItem.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VisualShowcase;
