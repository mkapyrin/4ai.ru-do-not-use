This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## ⚠️ КРИТИЧЕСКИ ВАЖНО: КАЧЕСТВО ПРЕЖДЕ ВСЕГО

**Главное правило:** КАЧЕСТВО > СКОРОСТЬ

> Быстрые и неправильные решения стоят в 50-100 раз дороже по токенам из-за пустой работы и исправлений.

**Принцип работы:**
1. ПРОВЕРИТЬ - собрать информацию о текущем состоянии
2. ПРОАНАЛИЗИРОВАТЬ - понять причину проблемы
3. ПОНЯТЬ - убедиться, что понимание полное
4. ПРЕДЛОЖИТЬ РЕШЕНИЕ - только после полного понимания

См. также: `QUALITY-FIRST.md`, `WORKING-PRINCIPLES.md`

## Environment Variables Setup

Create a `.env.local` file in the root directory and add:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-VLPK3J2RE3

# Yandex.Metrika
NEXT_PUBLIC_YM_ID=100916718

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://4ai.ru
```

## Features

- ✅ **Server-Side Rendering (SSR)** - Full HTML generated on server for SEO
- ✅ **Dynamic Meta Tags** - Unique title, description, and structured data for each page
- ✅ **Progressive Web App** - manifest.json for PWA support
- ✅ **Google Analytics 4** - Enhanced event tracking
- ✅ **Yandex.Metrika** - Detailed visitor analytics
- ✅ **TypeScript Support** - Type-safe development
- ✅ **Tailwind CSS** - Modern styling framework

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Version Management

### Manual Version Updates
```bash
npm run version:patch    # 1.11.0 → 1.11.1
npm run version:minor    # 1.11.0 → 1.12.0
npm run version:major    # 1.11.0 → 2.0.0
```

### Automatic Version Increment
The version automatically increments on every build and deploy:
- Footer version updates in `src/components/Footer.tsx`
- GitHub Actions automatically runs `npm run version:patch` before deployment
- Each production deploy gets a new patch version (1.11.0 → 1.11.1 → 1.11.2...)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
