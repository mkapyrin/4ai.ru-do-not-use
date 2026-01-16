'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Calendar, Users, Phone, MessageCircle, Mail, ArrowRight, Sparkles, MapPin, Bot } from 'lucide-react';
import BreathingCircle from '@/components/BreathingCircle';
import FearsFAQ from '@/components/FearsFAQ';
import EmotionalTestimonials from '@/components/EmotionalTestimonials';
import { extractedContent } from '@/data/extractedContent';
import { trackBookingClick, trackEvent, trackH1Variant, trackEmotionalCTA, trackTestClick, trackScrollDepth, trackTimeOnPage } from '@/utils/analytics';

export default function HomePage() {
  const { homepage, contact, keywords } = extractedContent;
  
  // Use extractedContent for practitioners and services
  const practitioners = extractedContent.practitioners;
  const services = homepage.services;


  // A/B Test: Emotional H1 variants
  const h1Variants = [
    'Место, где тело снова доверяет близости',
    'Вернуть телу тепло и близость - мягко, безопасно, без спешки',
    'Когда хочется близости, но телу тревожно - приходите дышать вместе'
  ];

  const [h1VariantIndex, setH1VariantIndex] = useState(0);

  // Initialize A/B test variant from localStorage or randomly select
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const storageKey = 'hero_h1_variant';
    const storedVariant = localStorage.getItem(storageKey);
    
    let selectedIndex;
    if (storedVariant !== null) {
      // Use existing variant from localStorage
      const variantIndex = parseInt(storedVariant, 10);
      if (variantIndex >= 0 && variantIndex < h1Variants.length) {
        selectedIndex = variantIndex;
        setH1VariantIndex(variantIndex);
      }
    } else {
      // First visit: randomly select variant
      const randomIndex = Math.floor(Math.random() * h1Variants.length);
      selectedIndex = randomIndex;
      setH1VariantIndex(randomIndex);
      localStorage.setItem(storageKey, randomIndex.toString());
    }
    
    // Track the variant selection
    if (selectedIndex !== undefined) {
      trackH1Variant(selectedIndex, h1Variants[selectedIndex]);
    }
  }, []);

  // Track scroll depth
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackScrollDepth(25);
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackScrollDepth(50);
      } else if (scrollPercent >= 75 && scrollPercent < 90) {
        trackScrollDepth(75);
      } else if (scrollPercent >= 90) {
        trackScrollDepth(90);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent);
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.h1
              key={h1VariantIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              {h1Variants[h1VariantIndex]}
            </motion.h1>
          </AnimatePresence>
          
          <h2 className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto font-medium" style={{ color: 'var(--text-primary)' }}>
            Тантрические практики и телесная терапия в Москве - мягкие шаги к гармонии
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
                  variant="default"
              size="lg"
              className="text-white px-8 py-4 hover:opacity-90"
              style={{ background: 'linear-gradient(to right, var(--purple-light), var(--pink-bright))' }}
              asChild
            >
              <a
                href="https://t.me/resursnie_bot"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackBookingClick('homepage_hero_emotional');
                  trackEmotionalCTA('Хочу почувствовать тепло', '/');
                }}
              >
                Хочу почувствовать тепло <Heart className="ml-2 w-5 h-5" />
              </a>
            </Button>
            
            <BreathingCircle className="hidden sm:block" />
            
            <Button
              size="lg"
              variant="outline"
              className="hover:opacity-80"
              style={{
                borderColor: 'var(--purple-light)',
                color: 'var(--purple-dark)',
                '--tw-hover-bg': 'var(--bg-secondary)'
              }}
              asChild
            >
              <Link href="/test" onClick={() => trackTestClick('/')}>
                Пройти тест личности <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
            Наши практики
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services && services.length > 0 ? services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="">
                  <Link href={service.url || '#'} className="text-purple-600 hover:underline text-sm">
                    Узнать больше →
                  </Link>
                </CardContent>
              </Card>
            )) : null}
          </div>
        </div>
      </section>

      {/* Emotional Components */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FearsFAQ />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <EmotionalTestimonials />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-4" style={{ color: 'var(--purple-dark)' }} />
              <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">{contact?.methods?.find(m => m.type === 'phone')?.value || '+79152370579'}</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="w-8 h-8 mb-4" style={{ color: 'var(--purple-dark)' }} />
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-gray-600">@resursnie_bot</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-4" style={{ color: 'var(--purple-dark)' }} />
              <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">{contact?.methods?.find(m => m.type === 'email')?.value || 'info@4ai.ru'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}