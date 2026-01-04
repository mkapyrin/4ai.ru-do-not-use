'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Heart, Star, Clock, MapPin, Phone } from 'lucide-react';

export default function PracticesPage() {
  const practices = [
    {
      title: "Регулярная Тантра",
      description: "Еженедельные практики каждый четверг с 19:00 до 22:00",
      icon: <Calendar className="w-8 h-8 text-rose-500" />,
      url: "/practices/regular-tantra",
      features: ["Групповые сессии", "Для пар и индивидуально", "3 часа практики"],
      price: "от 2000₽",
      duration: "3 часа",
      level: "Все уровни"
    },
    {
      title: "Ретриты и семинары",
      description: "Специальные интенсивы и тематические семинары",
      icon: <Star className="w-8 h-8 text-orange-500" />,
      url: "/practices/workshops",
      features: ["Углубленная работа", "Специальные темы", "Выходные дни"],
      price: "от 5000₽",
      duration: "1-3 дня",
      level: "Средний"
    },
    {
      title: "Парная терапия",
      description: "Индивидуальная работа с отношениями и близостью",
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      url: "/practices/couple-therapy",
      features: ["Работа с парой", "Индивидуальный подход", "Гибкое расписание"],
      price: "от 8000₽",
      duration: "2 часа",
      level: "Индивидуально"
    },
    {
      title: "Индивидуальные сессии",
      description: "Персональная работа с телесным терапевтом",
      icon: <Users className="w-8 h-8 text-orange-500" />,
      url: "/practices/individual-sessions",
      features: ["Индивидуальная работа", "Персональный план", "Конфиденциальность"],
      price: "от 6000₽",
      duration: "1.5 часа",
      level: "Индивидуально"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
            Наши практики
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Различные форматы работы для вашего комфортного развития и исцеления
          </p>
        </div>

        {/* Practices Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {practices.map((practice, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {practice.icon}
                </div>
                <CardTitle className="text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>
                  {practice.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {practice.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <ul className="space-y-2">
                    {practice.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-rose-600">{practice.price}</div>
                    <div style={{ color: 'var(--text-secondary)' }}>Стоимость</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-orange-600">{practice.duration}</div>
                    <div style={{ color: 'var(--text-secondary)' }}>Длительность</div>
                  </div>
                </div>

                {/* Level */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {practice.level}
                  </span>
                </div>

                {/* CTA Button */}
                <Link href={practice.url} className="block">
                  <Button variant="default" size="default" className="w-full text-white" style={{ background: 'linear-gradient(to right, #f43f5e, #f97316)' }}>
                    Узнать подробнее
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Schedule Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
            Расписание
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-rose-50 rounded-lg">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-rose-500" />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Понедельник</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Индивидуальные сессии</p>
              <p className="text-sm text-rose-600 font-medium">10:00 - 20:00</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Heart className="w-8 h-8 mx-auto mb-3 text-orange-500" />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Вторник</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Парная терапия</p>
              <p className="text-sm text-orange-600 font-medium">14:00 - 21:00</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Star className="w-8 h-8 mx-auto mb-3 text-purple-500" />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Четверг</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Регулярная тантра</p>
              <p className="text-sm text-purple-600 font-medium">19:00 - 22:00</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <Users className="w-8 h-8 mx-auto mb-3 text-pink-500" />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Выходные</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Ретриты и семинары</p>
              <p className="text-sm text-pink-600 font-medium">По расписанию</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-rose-400 to-orange-400 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Не знаете с чего начать?</h2>
          <p className="text-xl mb-6 opacity-90">
            Пройдите наш тест и получите персональные рекомендации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/test">
              <Button variant="default" size="default" className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Пройти тест
              </Button>
            </Link>
            <a
              href="https://t.me/resursnie_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors"
            >
              Записаться на консультацию
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
