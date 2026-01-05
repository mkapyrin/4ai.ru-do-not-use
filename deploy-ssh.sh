#!/bin/bash
# Скрипт для деплоя через SSH
# Использование: ./deploy-ssh.sh [user@server] [path]

SERVER="${1:-user@server}"
DEPLOY_PATH="${2:-/var/www/4ai.ru}"

echo "🚀 Начинаю деплой на $SERVER:$DEPLOY_PATH"
echo ""

# 1. Проверка сборки
if [ ! -d ".next" ]; then
    echo "❌ Директория .next не найдена. Запустите 'npm run build' сначала."
    exit 1
fi

echo "✅ Проект собран, директория .next найдена"
echo ""

# 2. Синхронизация файлов через rsync
echo "📦 Синхронизация файлов на сервер..."
rsync -avz --progress \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude '.next/cache' \
  --exclude '.cursor' \
  --exclude '.roo' \
  --exclude 'dist' \
  .next/ \
  public/ \
  package.json \
  package-lock.json \
  src/app/api/ \
  "$SERVER:$DEPLOY_PATH/"

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при синхронизации файлов"
    exit 1
fi

echo ""
echo "✅ Файлы синхронизированы"
echo ""

# 3. Установка зависимостей и перезапуск на сервере
echo "🔄 Установка зависимостей и перезапуск на сервере..."
ssh "$SERVER" "cd $DEPLOY_PATH && \
  npm install --production && \
  (pm2 restart 4ai.ru || pm2 start npm --name 4ai.ru -- start || npm run start) && \
  echo '✅ Приложение перезапущено'"

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при перезапуске приложения"
    exit 1
fi

echo ""
echo "🎉 Деплой завершен успешно!"
echo ""
echo "Проверка:"
echo "  curl https://4ai.ru/api/content/homepage_services"
echo "  curl https://4ai.ru/api/content/events"

