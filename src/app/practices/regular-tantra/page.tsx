'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Heart, Star, CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react';

export default function RegularTantraPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Регулярная Тантра
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Еженедельные практики каждый четверг с 19:00 до 22:00. Групповые занятия для развития близости и осознанности.
            </p>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                  <div className="text-sm text-gray-600">Каждый четверг</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-pink-500" />
                  <div className="text-sm text-gray-600">19:00 - 22:00</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <div className="text-sm text-gray-600">Групповые занятия</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-rose-500" />
                  <div className="text-sm text-gray-600">Москва, центр</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/resursnie_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                Записаться на занятие
              </a>
              <Link href="/test">
                <Button variant="outline" size="default" className="px-8 py-4">
                  Пройти тест для новичков
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
            Что вас ждет на занятиях
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Медитативные практики</h3>
                  <p className="text-gray-600">Научимся присутствовать в моменте и развивать осознанность в близости.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Работа с дыханием</h3>
                  <p className="text-gray-600">Специальные дыхательные упражнения для раскрытия энергии и снятия напряжения.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Телесные практики</h3>
                  <p className="text-gray-600">Мягкие прикосновения и упражнения для развития чувствительности и доверия.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Коммуникация</h3>
                  <p className="text-gray-600">Изучение языка согласия и выражения желаний в безопасной среде.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Групповая динамика</h3>
                  <p className="text-gray-600">Поддержка сообщества и обмен опытом с единомышленниками.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Индивидуальное внимание</h3>
                  <p className="text-gray-600">Каждый участник получает персональную обратную связь и поддержку.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
            Расписание и стоимость
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader className="">
                <CardTitle className="text-2xl">Разовое посещение</CardTitle>
                <CardDescription className="">Попробовать формат</CardDescription>
              </CardHeader>
              <CardContent className="">
                <div className="text-3xl font-bold text-purple-600 mb-4">2000₽</div>
                <div className="text-gray-600 mb-6">3 часа практики</div>
                <Button variant="default" size="default" className="w-full text-white" style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }}>
                  Записаться на пробное
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200">
              <CardHeader className="">
                <CardTitle className="text-2xl">Абонемент на 4 занятия</CardTitle>
                <CardDescription className="">Экономия 20%</CardDescription>
              </CardHeader>
              <CardContent className="">
                <div className="text-3xl font-bold text-purple-600 mb-4">6400₽</div>
                <div className="text-gray-600 mb-6">1600₽ за занятие</div>
                <Button variant="default" size="default" className="w-full text-white" style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }}>
                  Купить абонемент
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Schedule Details */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
              Когда проходят занятия
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-purple-50 rounded-lg">
                <Calendar className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>День недели</h4>
                <p className="text-purple-600 font-medium">Каждый четверг</p>
              </div>
              <div className="p-6 bg-pink-50 rounded-lg">
                <Clock className="w-12 h-12 mx-auto mb-3 text-pink-500" />
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Время</h4>
                <p className="text-pink-600 font-medium">19:00 - 22:00</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-lg">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-orange-500" />
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Место</h4>
                <p className="text-orange-600 font-medium">Москва, центр</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
            Часто задаваемые вопросы
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Нужен ли опыт?</h3>
                <p className="text-gray-600">Нет, занятия подходят для людей любого уровня подготовки. Главное - желание развиваться и открытость.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Можно ли прийти вдвоем?</h3>
                <p className="text-gray-600">Да, мы приветствуем пары! У нас есть специальные упражнения для совместной практики.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Что взять с собой?</h3>
                <p className="text-gray-600">Удобную одежду для движения, воду и открытое сердце. Всё остальное предоставляем мы.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Есть ли пробное занятие?</h3>
                <p className="text-gray-600">Да, можно записаться на первое занятие по специальной цене для знакомства с форматом.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Что делать, если опаздываю?</h3>
                <p className="text-gray-600">Пожалуйста, приходите вовремя. Если опаздываете, предупредите нас заранее по телефону.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Как записаться?</h3>
                <p className="text-gray-600">Напишите нам в Telegram или позвоните. Мы ответим на все вопросы и поможем с выбором.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Готовы присоединиться?</h2>
            <p className="text-xl mb-6 opacity-90">
              Начните свой путь к осознанной близости уже в этот четверг
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/resursnie_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="inline w-5 h-5 mr-2" />
                Записаться в Telegram
              </a>
              <a
                href="tel:+79152370579"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                <Phone className="inline w-5 h-5 mr-2" />
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
