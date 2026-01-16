'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import { extractedContent } from '@/data/extractedContent';

export default function ContactPage() {
  const { contact } = extractedContent;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Контакты
          </h1>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="rounded-lg p-8 shadow-lg" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', borderWidth: '1px' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Способы связи</h2>
            <div className="space-y-4">
              {contact?.methods && contact.methods.length > 0 ? contact.methods.map((method, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {(method.type === 'telegram' || method.type === 'telegram2') && <MessageCircle className="w-5 h-5 text-blue-500" />}
                  {method.type === 'whatsapp' && <MessageCircle className="w-5 h-5 text-green-500" />}
                  {method.type === 'phone' && <Phone className="w-5 h-5" style={{ color: 'var(--purple-dark)' }} />}
                  {method.type === 'vk' && <MessageCircle className="w-5 h-5 text-purple-500" />}
                  {method.type === 'email' && <Mail className="w-5 h-5" style={{ color: 'var(--purple-dark)' }} />}
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{method.label}</p>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {method.value && (method.value.startsWith('http') || method.value.startsWith('+') || method.value.startsWith('tel:') || method.value.startsWith('mailto:')) ? (
                        <a
                          href={method.value.startsWith('http') ? method.value : method.value.startsWith('+') ? `tel:${method.value}` : method.value}
                          target={method.value.startsWith('http') ? '_blank' : undefined}
                          rel={method.value.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-purple-600 hover:underline"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span>{method.value}</span>
                      )}
                    </p>
                  </div>
                </div>
              )) : null}
            </div>

            {/* Schedule */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Режим работы</h3>
              <div className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Пн-Вс: 10:00 - 22:00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Запись на удобное время</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Location */}
          <div className="rounded-lg p-8 shadow-lg" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', borderWidth: '1px' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Местоположение</h2>

            <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>г. Москва</p>
                <p className="text-sm">Адрес уточняется при записи</p>
              </div>
            </div>

            <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Как добраться</h3>
                <p className="text-sm">
                  Мы проводим занятия в уютных залах в центре Москвы.
                  Точный адрес сообщаем при записи на занятие.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Парковка</h3>
                <p className="text-sm">
                  Рядом есть платная парковка. Для участников занятий предусмотрены скидки.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="rounded-lg p-8 shadow-lg mb-12" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', borderWidth: '1px' }}>
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
            Часто задаваемые вопросы
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Можно ли прийти вдвоем?</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Да, мы приветствуем пары и предлагаем специальные программы для совместного развития.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Нужен ли опыт?</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Нет, мы работаем с людьми любого уровня подготовки. Главное - желание и открытость.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Есть ли пробное занятие?</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Да, мы предлагаем ознакомительные сессии для новых участников.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Что взять с собой?</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Удобную одежду, воду и открытое сердце. Всё остальное предоставляем мы.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-6 opacity-90">
            Первый шаг к гармонии и близости начинается здесь
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/resursnie_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Записаться на занятие
            </a>
            <Link
              href="/test"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Пройти тест
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
