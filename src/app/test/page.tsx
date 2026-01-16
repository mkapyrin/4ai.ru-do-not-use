'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Phone, Mail, MessageCircle, Share2, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { genderQuestion, questions, calculateArchetype, shareTexts } from '@/data/testData';

interface AnswerPoints {
  warrior: number;
  guardian: number;
  creator: number;
  sage: number;
  healer: number;
  mystic: number;
}

interface TestAnswer {
  text: string;
  value?: string;
  points: AnswerPoints;
}

interface TestResult {
  primary: string;
  scores: AnswerPoints;
  archetype: {
    name: string;
    title: string;
    description: string;
    color: string;
    strengths: string[];
    growthAreas: string[];
    suitableService: {
      name: string;
      description: string;
    };
  };
}

export default function TantricTestPage() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'gender' | 'test' | 'results' | 'contact'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [gender, setGender] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState<TestAnswer[]>([]);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [result, setResult] = useState<TestResult | null>(null);

  const handleStartTest = () => {
    setCurrentStep('gender');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGenderSelect = (genderValue: string) => {
    setGender(genderValue);
    setCurrentStep('test');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnswerToggle = (answer: TestAnswer) => {
    const currentQ = questions[currentQuestion];

    if (currentQ.type === 'single') {
      setSelectedAnswers([answer]);
    } else {
      const isSelected = selectedAnswers.some((a: TestAnswer) => a.text === answer.text);
      if (isSelected) {
        setSelectedAnswers(selectedAnswers.filter((a: TestAnswer) => a.text !== answer.text));
      } else {
        if (selectedAnswers.length < currentQ.maxChoices) {
          setSelectedAnswers([...selectedAnswers, answer]);
        }
      }
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswers.length === 0) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswers.map(a => a.value || a.text);
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswers([]);
    } else {
      // После теста сразу показываем результаты
      const testResult = calculateArchetype(newAnswers, gender);
      // Убеждаемся, что primary всегда строка
      if (testResult && testResult.primary) {
        setResult(testResult as TestResult);
        setCurrentStep('results');
      }
    }

    // Сбрасываем скролл на верх страницы после обновления состояния
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('contact');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRetakeTest = () => {
    setCurrentStep('intro');
    setCurrentQuestion(0);
    setAnswers([]);
    setGender('');
    setSelectedAnswers([]);
    setUserInfo({ name: '', email: '', phone: '' });
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {/* Intro Step */}
          {currentStep === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Тантрический тест личности
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Узнайте, какой архетип отношений ближе всего к вам
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-600 mb-6">
                      Этот тест поможет понять ваши предпочтения в близости и отношениях
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="font-semibold mb-3 text-purple-800">Что вы получите:</h3>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Определение вашего тантрического архетипа</li>
                      <li>• Персональные рекомендации по практикам</li>
                      <li>• Понимание ваших потребностей в близости</li>
                    </ul>
                  </div>

                  <Button
                    variant="default"
                    onClick={handleStartTest}
                    size="lg"
                    className="text-white px-8 py-4 text-lg"
                    style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }}
                  >
                    Начать тест <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Gender Selection */}
          {currentStep === 'gender' && (
            <motion.div
              key="gender"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Выберите ваш пол</CardTitle>
                  <CardDescription className="">
                    Это поможет нам дать более точные рекомендации
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      onClick={() => handleGenderSelect('female')}
                      variant={gender === 'female' ? 'default' : 'outline'}
                      size="lg"
                      className="h-20 flex flex-col items-center space-y-2"
                    >
                      <Heart className="w-6 h-6" />
                      <span>Женщина</span>
                    </Button>
                    <Button
                      onClick={() => handleGenderSelect('male')}
                      variant={gender === 'male' ? 'default' : 'outline'}
                      size="lg"
                      className="h-20 flex flex-col items-center space-y-2"
                    >
                      <Star className="w-6 h-6" />
                      <span>Мужчина</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Test Questions */}
          {currentStep === 'test' && (
            <motion.div
              key="test"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="max-w-3xl mx-auto">
                <CardHeader className="">
                  <div className="flex justify-between items-center mb-4">
                    <CardTitle className="">Вопрос {currentQuestion + 1} из {questions.length}</CardTitle>
                    <Badge variant="secondary" size="default" className="">{Math.round(progress)}%</Badge>
                  </div>
                  <Progress value={progress} className="w-full" />
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-6">
                      {questions[currentQuestion].text}
                    </h3>

                    <div className="space-y-3">
                      {questions[currentQuestion].answers.map((answer, index) => (
                        <div
                          key={index}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedAnswers.some(a => a.text === answer.text)
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => handleAnswerToggle(answer)}
                        >
                          <div className="flex items-center space-x-3">
                            {questions[currentQuestion].type === 'multiple' ? (
                              <Checkbox
                                checked={selectedAnswers.some(a => a.text === answer.text)}
                                readOnly
                                className=""
                              />
                            ) : (
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                selectedAnswers.some(a => a.text === answer.text)
                                  ? 'border-purple-500 bg-purple-500'
                                  : 'border-gray-300'
                              }`} />
                            )}
                            <span>{answer.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="default"
                      size="default"
                      onClick={handleNextQuestion}
                      disabled={selectedAnswers.length === 0}
                      className="mt-6 text-white px-8 py-3"
                      style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }}
                    >
                      {currentQuestion < questions.length - 1 ? 'Следующий вопрос' : 'Узнать результат'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Results */}
          {currentStep === 'results' && result && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">Ваш тантрический архетип</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className={`inline-flex items-center px-6 py-3 rounded-full text-white text-lg font-semibold ${result.archetype.color.replace('bg-', 'bg-')}`}>
                    {result.archetype.name}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">{result.archetype.title}</h3>
                    <p className="text-gray-700 mb-4">{result.archetype.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 text-left">
                      <div>
                        <h4 className="font-semibold mb-2">Ваши сильные стороны:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {result.archetype.strengths.map((strength: string, index: number) => (
                            <li key={index}>• {strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Области для развития:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {result.archetype.growthAreas.map((area: string, index: number) => (
                            <li key={index}>• {area}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Service */}
                  <Card className={`border-2 bg-gradient-to-r ${result.archetype.color} bg-opacity-10`}>
                    <CardHeader className="">
                      <CardTitle className="text-center">Подходящее для вас занятие</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <h3 className="text-xl font-bold mb-2">{result.archetype.suitableService.name}</h3>
                      <p className="text-gray-700 mb-4">{result.archetype.suitableService.description}</p>

                      <p className="text-gray-600 mb-6">
                        Мы можем отправить вам персональные рекомендации по рекомендуемым практикам, если вы поделитесь своими данными
                      </p>

                      <form onSubmit={handleContactSubmit} className="space-y-4 max-w-md mx-auto">
                        <div>
                          <Input
                            type="text"
                            required
                            value={userInfo.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo, name: e.target.value})}
                            placeholder="Ваше имя"
                            className="text-center"
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            required
                            value={userInfo.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo, email: e.target.value})}
                            placeholder="email@example.ru"
                            className="text-center"
                          />
                        </div>
                        <div>
                          <Input
                            type="tel"
                            value={userInfo.phone}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo, phone: e.target.value})}
                            placeholder="+7 (915) 237-05-79 (необязательно)"
                            className="text-center"
                          />
                        </div>
                        <Button variant="default" type="submit" size="lg" className="text-white w-full">
                          Получить персональные рекомендации
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={handleRetakeTest}
                      variant="outline"
                      size="default"
                      className=""
                    >
                      Пройти тест заново
                    </Button>
                    <a
                      href="https://t.me/resursnie_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                    >
                      Записаться на занятие
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Contact Form - после результатов */}
          {currentStep === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="max-w-md mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Спасибо за интерес!</CardTitle>
                  <CardDescription className="">
                    Мы отправим вам персональные рекомендации на указанный email
                  </CardDescription>
                </CardHeader>
                <CardContent className="">
                  <div className="text-center space-y-4">
                    <div className="text-green-600 font-semibold">
                      ✅ Ваши данные получены!
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Имя: {userInfo.name}</p>
                      <p>Email: {userInfo.email}</p>
                      {userInfo.phone && <p>Телефон: {userInfo.phone}</p>}
                    </div>
                    <Button
                      onClick={handleRetakeTest}
                      className="w-full"
                      variant="outline"
                      size="default"
                    >
                      Пройти тест заново
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
