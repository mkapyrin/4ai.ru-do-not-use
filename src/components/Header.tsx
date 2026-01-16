'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Главная', href: '/', current: pathname === '/' },
    { name: 'Практики', href: '/practices', current: pathname.startsWith('/practices') },
    { name: 'События', href: '/events', current: pathname === '/events' },
    { name: 'Блог', href: '/blog', current: pathname.startsWith('/blog') },
    { name: 'О нас', href: '/about', current: pathname === '/about' },
    { name: 'Контакты', href: '/contact', current: pathname === '/contact' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-50" style={{ borderColor: 'var(--border-color)' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-start h-16 pt-0">
          {/* Logo */}
          <div className="flex-shrink-0 pt-0">
            <Link href="/" className="flex items-start pt-0">
              <img
                src="/images/logo-resursnie-orig2.png"
                alt="Ресурсные"
                className="h-[80%] w-auto max-w-[150px]"
                onError={(e) => {
                  if (process.env.NODE_ENV === 'development') {
                    console.error('Logo failed to load');
                  }
                  const img = e.target as HTMLImageElement;
                  img.style.display = 'none';
                  if (img.parentNode && img.parentNode instanceof HTMLElement) {
                    img.parentNode.innerHTML = `
                    <span class="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                      Ресурсные
                    </span>
                  `;
                  }
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block pt-4">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.current
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item.current
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;