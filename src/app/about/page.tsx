'use client';

import React from 'react';
import { extractedContent } from '@/data/extractedContent';

export default function AboutPage() {
  const { practitioners } = extractedContent;

  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/1758e597-368d-4b04-a97a-0a10c135087d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'about/page.tsx:7',message:'AboutPage render - practitioners data',data:{practitionersCount:practitioners?.length,practitioner0:practitioners?.[0]?{name:practitioners[0].name,hasImage:!!practitioners[0].image,hasPhoto:!!practitioners[0].photo,imageValue:practitioners[0].image,photoValue:practitioners[0].photo}:null,practitioner1:practitioners?.[1]?{name:practitioners[1].name,hasImage:!!practitioners[1].image,hasPhoto:!!practitioners[1].photo,imageValue:practitioners[1].image,photoValue:practitioners[1].photo}:null},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            О Центре Ресурсные
          </h1>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Пространство тантрических практик и исцеления в Москве
          </p>
        </div>

        {/* About Center Section */}
        <div className="rounded-lg p-8 shadow-lg mb-12" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', borderWidth: '1px' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Наша философия</h2>
          <div className="prose max-w-none" style={{ color: 'var(--text-primary)' }}>
            <p className="text-lg leading-relaxed mb-6">
              Центр Ресурсные - это пространство, где древняя мудрость тантры встречается с современными подходами к исцелению и саморазвитию.
              Мы создаем безопасную и поддерживающую среду для исследования глубинных аспектов человеческой природы.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Наш подход</h3>
                <ul className="space-y-2" style={{ color: 'var(--text-primary)' }}>
                  <li>• Интеграция телесных и духовных практик</li>
                  <li>• Работа с энергетикой и осознанностью</li>
                  <li>• Исцеление травм и ограничивающих убеждений</li>
                  <li>• Развитие глубокой близости и доверия</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pink-600">Наши ценности</h3>
                <ul className="space-y-2" style={{ color: 'var(--text-primary)' }}>
                  <li>• Безопасность и конфиденциальность</li>
                  <li>• Уважение к индивидуальному темпу</li>
                  <li>• Поддержка и эмпатия</li>
                  <li>• Постоянное развитие и обучение</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Наша миссия</h3>
              <p className="text-center text-lg" style={{ color: 'var(--text-primary)' }}>
                Помогать людям возвращать связь со своим телом, развивать осознанную близость
                и жить в гармонии с собой и миром.
              </p>
            </div>
          </div>
        </div>

        {/* Practitioners Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
            Наши ведущие
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {practitioners.map((practitioner, index) => {
              // #region agent log
              const imageSrc = practitioner.image || practitioner.photo;
              fetch('http://127.0.0.1:7243/ingest/1758e597-368d-4b04-a97a-0a10c135087d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'about/page.tsx:71',message:'Practitioner image src resolution - POST-FIX',data:{index,name:practitioner.name,hasPhoto:!!practitioner.photo,hasImage:!!practitioner.image,photoValue:practitioner.photo,imageValue:practitioner.image,resolvedSrc:imageSrc},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
              // #endregion
              return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                  <img
                    src={imageSrc}
                    alt={practitioner.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // #region agent log
                      fetch('http://127.0.0.1:7243/ingest/1758e597-368d-4b04-a97a-0a10c135087d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'about/page.tsx:83',message:'Image load error - POST-FIX',data:{index,name:practitioner.name,attemptedSrc:e.target.src,currentSrc:e.target.currentSrc,errorType:e.type},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'B'})}).catch(()=>{});
                      // #endregion
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <span class="text-white text-6xl font-bold">${practitioner.name.charAt(0)}</span>
                        </div>
                      `;
                    }}
                    onLoad={(e) => {
                      // #region agent log
                      fetch('http://127.0.0.1:7243/ingest/1758e597-368d-4b04-a97a-0a10c135087d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'about/page.tsx:94',message:'Image load success - POST-FIX',data:{index,name:practitioner.name,loadedSrc:e.target.src,currentSrc:e.target.currentSrc,naturalWidth:e.target.naturalWidth,naturalHeight:e.target.naturalHeight},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'C'})}).catch(()=>{});
                      // #endregion
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {practitioner.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">{practitioner.role || practitioner.title}</p>
                  <p className="text-gray-600 mb-4">{practitioner.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Специализация:</h4>
                    <div className="flex flex-wrap gap-2">
                      {practitioner.specializations.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>

        {/* History Section */}
        <div className="rounded-lg p-8 shadow-lg mb-12" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', borderWidth: '1px' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Наша история</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">С 2009 года</h3>
              <p className="text-gray-600 mb-4">
                Центр Ресурсные работает в Москве уже более 15 лет, помогая людям в их пути к исцелению и самопознанию.
              </p>
              <p className="text-gray-600">
                За это время мы провели сотни семинаров, ретритов и индивидуальных сессий,
                накопив богатый опыт работы с различными запросами и состояниями.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-pink-600">Наша команда</h3>
              <p className="text-gray-600 mb-4">
                Ведущие центра - сертифицированные специалисты с многолетним опытом в телесной терапии,
                тантрических практиках и психологическом консультировании.
              </p>
              <p className="text-gray-600">
                Мы регулярно проходим обучение и супервизию, чтобы предоставлять нашим клиентам
                максимально качественную и современную помощь.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Готовы начать свой путь?</h2>
          <p className="text-xl mb-6 opacity-90">
            Свяжитесь с нами для записи на консультацию или семинар
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/resursnie_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Написать в Telegram
            </a>
            <a
              href="/test"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Пройти тест
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
