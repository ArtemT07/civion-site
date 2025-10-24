# CIVION Starter (Next.js 14 + Tailwind + Prisma)

Запуск локально:
```bash
npm i
npx prisma migrate dev --name init
npm run dev
```

Структура:
- `app/` — App Router (Home, Calculadora, Materiales, Sobre, Contacto, Legal)
- `prisma/schema.prisma` — модели (User, Material, HouseType, Option, Project, Lead, StatEvent)
- `app/calculadora` — упрощённый мастер расчёта (демо-логика)

Заметки:
- Аутентификация и панели /owner /admin — запланированы, но в стартере не реализованы.
- Данные материалов/типов домов — сейчас захардкожены на странице калькулятора для примера.
- Готово к расширению под NextAuth, API routes и CRUD через Prisma.
