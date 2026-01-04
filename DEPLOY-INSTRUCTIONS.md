# Инструкции для ручного деплоя через SSH

## Подготовка к деплою

### 1. Сборка проекта локально

```bash
cd /Users/mickka/Code/new.4ai.ru
npm run build
```

Это создаст директорию `.next/` с собранным проектом.

### 2. Что нужно задеплоить

После сборки нужно скопировать на сервер:
- `.next/` - собранный Next.js проект
- `public/` - статические файлы (изображения, manifest.json, robots.txt)
- `package.json` - зависимости
- `node_modules/` - или установить на сервере через `npm install --production`
- `.env.local` - переменные окружения (если есть)

### 3. Структура на production сервере

На production сервере Next.js должен быть запущен как Node.js приложение:
- Next.js работает в режиме SSR (не статический экспорт)
- Запускается через `npm run start` или `next start`
- Обычно работает на порту 3000 или через PM2/nginx reverse proxy

## Процесс деплоя

### Вариант 1: Через rsync (рекомендуется)

```bash
# 1. Собрать проект
npm run build

# 2. Синхронизировать файлы на сервер
rsync -avz --exclude 'node_modules' \
  --exclude '.git' \
  --exclude '.next/cache' \
  .next/ \
  public/ \
  package.json \
  package-lock.json \
  user@server:/var/www/4ai.ru/

# 3. На сервере установить зависимости и перезапустить
ssh user@server "cd /var/www/4ai.ru && npm install --production && pm2 restart 4ai.ru || npm run start"
```

### Вариант 2: Через scp

```bash
# 1. Собрать проект
npm run build

# 2. Создать архив
tar -czf deploy.tar.gz .next/ public/ package.json package-lock.json

# 3. Скопировать на сервер
scp deploy.tar.gz user@server:/tmp/

# 4. На сервере распаковать и перезапустить
ssh user@server "
  cd /var/www/4ai.ru
  tar -xzf /tmp/deploy.tar.gz
  npm install --production
  pm2 restart 4ai.ru || npm run start
  rm /tmp/deploy.tar.gz
"
```

### Вариант 3: Через git pull на сервере

```bash
# 1. Закоммитить и запушить изменения
git add .
git commit -m "Deploy: исправления и новые API routes"
git push origin main

# 2. На сервере
ssh user@server "
  cd /var/www/4ai.ru
  git pull origin main
  npm install --production
  npm run build
  pm2 restart 4ai.ru || npm run start
"
```

## Важные моменты

1. **API Routes**: Новые API routes (`/api/content/homepage_services`, `/api/content/events`) требуют, чтобы Next.js работал в режиме SSR, а не статического экспорта.

2. **Переменные окружения**: Убедитесь, что на сервере есть `.env.local` с правильными значениями:
   ```
   NEXT_PUBLIC_GA_ID=G-VLPK3J2RE3
   NEXT_PUBLIC_YM_ID=100916718
   NEXT_PUBLIC_SITE_URL=https://4ai.ru
   ```

3. **Права доступа**: После копирования файлов установите правильные права:
   ```bash
   chown -R www-data:www-data /var/www/4ai.ru
   chmod -R 755 /var/www/4ai.ru
   ```

4. **Проверка после деплоя**:
   ```bash
   curl https://4ai.ru/api/content/homepage_services
   curl https://4ai.ru/api/content/events
   curl https://4ai.ru/api/sitemap
   ```

## Что было исправлено в этом деплое

1. ✅ Исправлена загрузка изображений на странице `/about` (использование `image` вместо `photo`)
2. ✅ Добавлены API routes для `/api/content/homepage_services` и `/api/content/events` (возвращают пустые массивы, предотвращают 500 ошибки)
3. ✅ Исправлены все ошибки TypeScript в компонентах
4. ✅ Удален устаревший GitHub Actions workflow

## После деплоя

Проверьте:
- ✅ API endpoints возвращают 200 OK вместо 500
- ✅ Изображения загружаются на странице `/about`
- ✅ Нет ошибок в консоли браузера
- ✅ Все страницы работают корректно

