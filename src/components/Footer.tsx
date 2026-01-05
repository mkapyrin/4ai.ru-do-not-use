'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageCircle, MapPin, Calendar, Heart, Send } from 'lucide-react';
import { extractedContent } from '@/data/extractedContent';

const Footer: React.FC = () => {
  const { contact } = extractedContent;
  const currentYear = new Date().getFullYear();
  const siteVersion = '1.11.67'; // Обновляется с каждым деплоем в production

  // Use extractedContent for contact methods
  const contactMethods = contact.methods;

  const quickLinks = [
    { name: 'Регулярная Тантра', href: '/practices/regular-tantra' },
    { name: 'Ретриты и семинары', href: '/practices/workshops' },
    { name: 'События', href: '/events' },
    { name: 'Блог', href: '/blog' }
  ];

  const legalLinks = [
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Условия использования', href: '/terms' },
    { name: 'Оферта', href: '/offer' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Ресурсные
              </h3>
              <p className="text-gray-300 mt-2">
                Центр тантры и телесных практик в Москве
              </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Путь к гармонии, исцелению и осознанной жизни через древние практики тантры
              и современные методы телесной терапии.
            </p>

            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>v{siteVersion}</span>
              <span>•</span>
              <span>{currentYear}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Практики</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Информация</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Контакты</h4>
            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {method.type === 'phone' && <Phone className="h-4 w-4 text-purple-400" />}
                    {method.type === 'email' && <Mail className="h-4 w-4 text-purple-400" />}
                    {method.type === 'telegram' && <MessageCircle className="h-4 w-4 text-purple-400" />}
                    {method.type === 'address' && <MapPin className="h-4 w-4 text-purple-400" />}
                    {method.type === 'calendar' && <Calendar className="h-4 w-4 text-purple-400" />}
                  </div>
                  <div>
                    {method.value && (method.value.startsWith('http') || method.value.startsWith('+') || method.value.startsWith('tel:') || method.value.startsWith('mailto:')) ? (
                      <a
                        href={method.value.startsWith('http') ? method.value : method.value.startsWith('+') ? `tel:${method.value}` : method.value}
                        target={method.value.startsWith('http') ? '_blank' : undefined}
                        rel={method.value.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm">{method.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Центр Ресурсные. Все права защищены.
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Сделано с</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>для вашего благополучия</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;