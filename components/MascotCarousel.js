'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const assetPath = (folder, file) => `/images/${folder}/${encodeURIComponent(file)}`;
const AUTOPLAY_DELAY = 4000;
const SWIPE_THRESHOLD = 45;

const mascots = [
  {
    name: 'CUYDE Principal',
    subtitle: 'Apresentação calorosa para uma experiência digital sofisticada.',
    image: 'Mascote CUYDE KWide 2.png',
  },
  {
    name: 'CUYDE Bandeja',
    subtitle: 'Agilidade no serviço com atendimento que transmite organização.',
    image: 'Mascote CUYDE KWide bandeja.png',
  },
  {
    name: 'CUYDE Cadeira',
    subtitle: 'Conforto, recepção e permanência com identidade de marca.',
    image: 'Mascote CUYDE KWide cadeira.png',
  },
  {
    name: 'CUYDE Celular',
    subtitle: 'Jornada mobile intuitiva para pedidos, pagamentos e fidelização.',
    image: 'Mascote CUYDE KWide celular.png',
  },
  {
    name: 'CUYDE Moto',
    subtitle: 'Velocidade operacional para entregas e novos canais de venda.',
    image: 'Mascote CUYDE KWide moto.png',
  },
];

const slideVariants = {
  initial: (direction) => ({ opacity: 0, x: direction > 0 ? 80 : -80, rotate: direction > 0 ? 2 : -2 }),
  animate: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.65, ease: 'easeOut' } },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -80 : 80, rotate: direction > 0 ? -2 : 2, transition: { duration: 0.45, ease: 'easeIn' } }),
};

const MascotCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  const handleFocus = () => setIsPaused(true);

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  };

  const goToSlide = (index) => {
    if (index === activeIndex) {
      return;
    }

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const changeSlide = (step) => {
    setDirection(step > 0 ? 1 : -1);
    setActiveIndex((current) => (current + step + mascots.length) % mascots.length);
  };

  useEffect(() => {
    if (isPaused || !isAutoPlayEnabled) {
      return undefined;
    }

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % mascots.length);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [isAutoPlayEnabled, isPaused]);

  const activeMascot = mascots[activeIndex];

  return (
    <section className="section-padding bg-[#08192f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
            Presença de marca
          </span>
          <h2 className="text-4xl font-black text-white md:text-5xl">Um mascote que humaniza tecnologia e reforça confiança</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Diferentes poses e contextos ajudam a KWide a comunicar proximidade, agilidade e profissionalismo em cada ponto de contato.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
          tabIndex={0}
          role="region"
          aria-label="Carousel interativo dos mascotes da KWide"
          aria-describedby="mascot-carousel-help"
          onTouchEnd={(event) => {
            if (touchStart === null) {
              setTouchStart(null);
              return;
            }

            const distance = event.changedTouches[0].clientX - touchStart;
            if (Math.abs(distance) > SWIPE_THRESHOLD) {
              changeSlide(distance < 0 ? 1 : -1);
            }
            setTouchStart(null);
          }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,209,193,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_30%)]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex min-h-[20rem] items-center justify-center rounded-[1.5rem] bg-[#0b2341]/50 p-4">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeMascot.image}
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative aspect-square w-full max-w-md"
                >
                  <motion.div
                    animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full w-full"
                  >
                    <Image
                      src={assetPath('mascot', activeMascot.image)}
                      alt={activeMascot.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain drop-shadow-[0_24px_55px_rgba(0,209,193,0.22)]"
                      priority={activeIndex === 0}
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative space-y-6 px-2 md:px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMascot.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                >
                  <span className="inline-flex rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
                    Slide {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-6 text-3xl font-black text-white md:text-4xl">{activeMascot.name}</h3>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">{activeMascot.subtitle}</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => changeSlide(-1)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-brand-teal hover:text-brand-teal"
                  aria-label="Ver mascote anterior"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => changeSlide(1)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-brand-teal hover:text-brand-teal"
                  aria-label="Ver próximo mascote"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={() => setIsAutoPlayEnabled((current) => !current)}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-brand-teal hover:text-brand-teal"
                  aria-label={isAutoPlayEnabled ? 'Pausar rotação automática' : 'Retomar rotação automática'}
                  aria-describedby="mascot-carousel-help"
                  aria-pressed={!isAutoPlayEnabled}
                >
                  {isAutoPlayEnabled ? 'Pausar autoplay' : 'Retomar autoplay'}
                </button>
                <span id="mascot-carousel-help" className="text-sm text-slate-400">Auto-play a cada 4s · pause com botão, hover, foco ou swipe no mobile</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {mascots.map((mascot, index) => (
                  <button
                    key={mascot.name}
                    type="button"
                    aria-label={`Ir para ${mascot.name}`}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-10 bg-brand-teal' : 'w-3 bg-white/25 hover:bg-white/45'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MascotCarousel;
