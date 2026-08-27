# Sebbia Test Task

Приложение для просмотра новостей, выполненное в рамках тестового задания.

## Стек технологий

- **React 19** + **TypeScript**
- **React Router v8** (SSR)
- **TanStack React Query** — управление серверным состоянием
- **Axios** — HTTP-запросы
- **Vite** — сборка и dev-сервер
- **PostCSS** — обработка стилей (nested, mixins, simple-vars)

## Архитектура

Проект построен по принципам **Feature-Sliced Design (FSD)**:

```
src/
├── app/          # Конфигурация приложения, роутинг
├── entities/     # Бизнес-сущности (news)
├── features/     # Интерактивные фичи (news-categories)
├── widgets/      # Составные блоки UI (news-section)
├── pages/        # Страницы (home-page, news-detail-page)
└── shared/       # Общие ресурсы
    ├── api/      # API-клиент и эндпоинты
    ├── config/   # Конфигурация
    ├── lib/      # Утилиты
    ├── styles/   # Глобальные стили
    ├── types/    # Типы
    └── ui/       # Переиспользуемые UI-компоненты
```

## Маршруты

| Путь | Страница |
|------|----------|
| `/` | Главная страница со списком новостей |
| `/news/:id` | Детальная страница новости |

## API

Приложение работает с следующими эндпоинтами:

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/news/categories` | Список категорий новостей |
| GET | `/news/categories/:id/news` | Новости по категории |
| GET | `/news/details` | Детали новости |

Базовый URL API задаётся через переменную окружения `VITE_API_URL` (по умолчанию `/api`).

## Переменные окружения

Скопируйте `.env.example` в `.env` и заполните:

```bash
VITE_API_URL=<URL вашего API>
```

## Установка и запуск

```bash
# Установка зависимостей
pnpm install

# Development
pnpm dev

# Сборка
pnpm build

# Запуск продакшн-версии
pnpm start

# Линтинг
pnpm lint

# Форматирование
pnpm format
```

## Структура алиасов

| Алиас | Путь |
|-------|------|
| `@pages` | `/src/pages` |
| `@widgets` | `/src/widgets` |
| `@features` | `/src/features` |
| `@entities` | `/src/entities` |
| `@shared` | `/src/shared` |
