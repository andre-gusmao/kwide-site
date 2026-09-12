'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { assetPath } from '@/utils/assetPath';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('pt-BR');
  const router = useRouter();

  const menuItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Para Empresas', href: '/para-empresas' },
    { name: 'Para Clientes', href: '/para-clientes' },
    { name: 'Segmentos', href: '#segmentos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Contato', href: '#contato' },
  ];

  const languages = [
    { code: 'pt-BR', label: 'Português' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 bg-brand-navy bg-opacity-95 backdrop-blur-md border-b border-brand-teal border-opacity-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo com animação */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12"
            >
              <Image
                src={assetPath('/images/logo/Logotipo_KWide_principal.png')}
                alt="KWide Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="font-bold text-xl text-white hidden sm:inline">KWide</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-brand-teal transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="hidden md:block bg-brand-navy text-white border border-brand-teal rounded px-3 py-2 text-sm hover:bg-opacity-80 transition"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>

            {/* CTA Buttons */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block btn-secondary text-sm"
            >
              Cadastrar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block btn-primary text-sm"
            >
              Entrar
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden pb-4 space-y-2"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-brand-teal py-2 px-2 rounded hover:bg-gray-800 transition"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
