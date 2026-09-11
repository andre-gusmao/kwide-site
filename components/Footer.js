'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center font-bold text-brand-navy">
                K
              </div>
              <span className="font-bold text-xl text-white">KWide</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando qualquer mesa em um canal inteligente de vendas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-white mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-brand-teal transition">Features</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-teal transition">Preços</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-teal transition">Segurança</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-teal transition">Status</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-brand-teal transition">Sobre</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-teal transition">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-teal transition">Carreiras</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-teal transition">Contato</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><a href={process.env.NEXT_PUBLIC_WHATSAPP} className="text-gray-400 hover:text-brand-teal transition flex items-center">📱 WhatsApp</a></li>
              <li><a href="mailto:contato@kwide.com" className="text-gray-400 hover:text-brand-teal transition flex items-center">✉️ Email</a></li>
              <li><a href={process.env.NEXT_PUBLIC_INSTAGRAM} className="text-gray-400 hover:text-brand-teal transition flex items-center">📸 Instagram</a></li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} KWide. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-brand-teal text-sm transition">Privacidade</Link>
              <Link href="#" className="text-gray-500 hover:text-brand-teal text-sm transition">Termos</Link>
              <Link href="#" className="text-gray-500 hover:text-brand-teal text-sm transition">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
