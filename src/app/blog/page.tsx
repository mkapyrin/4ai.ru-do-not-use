'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen, Heart, Clock, Eye } from 'lucide-react';

export default function BlogPage() {
  // Временные данные блога (пока без CMS)
  const blogPosts = [
    {
      id: 1,
      title: "Тантра для начинающих: первые шаги к близости",
      excerpt: "Что такое тантра и как начать практиковать. Основные принципы и техники для новичков в мире тантрических практик.",
      author: "Mike Azal",
      date: "2024-12-15",
      readTime: "5 мин",
      views: 245,
      category: "Основы",
      image: "/images/blog/tantra-basics.jpg",
      tags: ["тантра", "начинающие", "близость"]
    },
    {
      id: 2,
      title: "Исцеление через прикосновения",
      excerpt: "Как телесная терапия помогает преодолеть эмоциональные барьеры и вернуть доверие к близости.",
      author: "Nartaka",
      date: "2024-12-10",
      readTime: "7 мин",
      views: 189,
      category: "Терапия",
      image: "/images/blog/healing-touch.jpg",
      tags: ["терапия", "прикосновения", "исцеление"]
    },
    {
      id: 3,
      title: "Медитация и сексуальность: путь к гармонии",
      excerpt: "Как медитативные практики помогают развить осознанность в интимной жизни и отношениях.",
      author: "Mike Azal",
      date: "2024-12-05",
      readTime: "6 мин",
      views: 156,
      category: "Медитация",
      image: "/images/blog/meditation-sexuality.jpg",
      tags: ["медитация", "осознанность", "сексуальность"]
    },
    {
      id: 4,
      title: "Работа с сексуальной энергией",
      excerpt: "Практические упражнения для развития и гармонизации сексуальной энергии в теле.",
      author: "Nartaka",
      date: "2024-11-28",
      readTime: "8 мин",
      views: 203,
      category: "Энергия",
      image: "/images/blog/sexual-energy.jpg",
      tags: ["энергия", "упражнения", "развитие"]
    }
  ];

  const categories = [
    { name: "Все статьи", count: blogPosts?.length || 0 },
    { name: "Основы", count: blogPosts?.filter(p => p.category === "Основы").length || 0 },
    { name: "Терапия", count: blogPosts?.filter(p => p.category === "Терапия").length || 0 },
    { name: "Медитация", count: blogPosts?.filter(p => p.category === "Медитация").length || 0 },
    { name: "Энергия", count: blogPosts?.filter(p => p.category === "Энергия").length || 0 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Блог о тантрических практиках
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Статьи, практики и размышления о пути к гармонии, близости и самопознанию
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "secondary"}
              className="cursor-pointer px-4 py-2"
              size="default"
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {blogPosts && blogPosts.length > 0 ? blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="aspect-video bg-gradient-to-r from-purple-400 to-pink-400 rounded-t-lg flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-50" />
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" size="default" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-purple-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" size="default" className="w-full">
                      Читать статью
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          )) : null}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Подпишитесь на обновления
            </h2>
            <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
              Получайте новые статьи и анонсы практик прямо в Telegram
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="https://t.me/resursnie_blog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                Подписаться в Telegram
              </a>
              <a
                href="https://t.me/resursnie_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Записаться на практику
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Хотите начать практику?</h2>
          <p className="text-xl mb-6 opacity-90">
            Пройдите наш тест и получите персональные рекомендации по практикам
          </p>
          <Link href="/test">
            <Button variant="default" size="default" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Пройти тест
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
