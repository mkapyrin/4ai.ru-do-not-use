#!/bin/bash
# Скрипт для проверки деплоя

echo "🔍 Проверка деплоя на production..."

# Проверка API endpoints
echo ""
echo "1. Проверка API endpoints:"
echo "   /api/content/homepage_services:"
STATUS1=$(curl -s -o /dev/null -w "%{http_code}" https://4ai.ru/api/content/homepage_services)
if [ "$STATUS1" = "200" ]; then
    echo "   ✅ HTTP $STATUS1 - OK"
    curl -s https://4ai.ru/api/content/homepage_services | jq . 2>/dev/null || curl -s https://4ai.ru/api/content/homepage_services
else
    echo "   ❌ HTTP $STATUS1 - ОШИБКА"
fi

echo ""
echo "   /api/content/events:"
STATUS2=$(curl -s -o /dev/null -w "%{http_code}" https://4ai.ru/api/content/events)
if [ "$STATUS2" = "200" ]; then
    echo "   ✅ HTTP $STATUS2 - OK"
    curl -s https://4ai.ru/api/content/events | jq . 2>/dev/null || curl -s https://4ai.ru/api/content/events
else
    echo "   ❌ HTTP $STATUS2 - ОШИБКА"
fi

echo ""
echo "   /api/sitemap:"
STATUS3=$(curl -s -o /dev/null -w "%{http_code}" https://4ai.ru/api/sitemap)
if [ "$STATUS3" = "200" ]; then
    echo "   ✅ HTTP $STATUS3 - OK"
else
    echo "   ❌ HTTP $STATUS3 - ОШИБКА"
fi

echo ""
echo "2. Проверка главной страницы:"
STATUS4=$(curl -s -o /dev/null -w "%{http_code}" https://4ai.ru/)
if [ "$STATUS4" = "200" ]; then
    echo "   ✅ HTTP $STATUS4 - OK"
else
    echo "   ❌ HTTP $STATUS4 - ОШИБКА"
fi

echo ""
echo "3. Проверка страницы /about (изображения):"
STATUS5=$(curl -s -o /dev/null -w "%{http_code}" https://4ai.ru/about)
if [ "$STATUS5" = "200" ]; then
    echo "   ✅ HTTP $STATUS5 - OK"
    # Проверка наличия изображений в HTML
    if curl -s https://4ai.ru/about | grep -q "practitioners/mike\|practitioners/nartaka"; then
        echo "   ✅ Изображения найдены в HTML"
    else
        echo "   ⚠️  Изображения не найдены в HTML"
    fi
else
    echo "   ❌ HTTP $STATUS5 - ОШИБКА"
fi

echo ""
echo "📊 Итоговая сводка:"
if [ "$STATUS1" = "200" ] && [ "$STATUS2" = "200" ] && [ "$STATUS4" = "200" ]; then
    echo "   ✅ Все проверки пройдены успешно!"
    exit 0
else
    echo "   ❌ Обнаружены ошибки. Проверьте логи выше."
    exit 1
fi

