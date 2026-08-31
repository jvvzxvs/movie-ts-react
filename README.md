# Movie Search

[![CI](https://github.com/jvvzxvs/movie-ts-react/actions/workflows/ci.yml/badge.svg)](https://github.com/jvvzxvs/movie-ts-react/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**[Живое демо](https://jvvzxvs.github.io/movie-ts-react/)**

> **EN:** Movie search over the TMDB API - live search, pagination, a movie
> page with trailer/rating. React + TypeScript, no external state
> management (component-local `useState`/`useEffect`). Deployed to GitHub
> Pages on every push to `main`.

Поиск фильмов через TMDB: живой поиск, пагинация, карточка фильма с постером,
трейлером и рейтингом. Pet-проект для отработки React + TypeScript без лишнего
стейт-менеджмента - весь стейт живёт в компонентах через `useState`/`useEffect`.

## Возможности

- Поиск фильмов по названию с фильтром "adult content"
- Пагинация результатов
- Skeleton-состояния при загрузке (список и карточка фильма)
- Страница фильма: постер, бэкдроп, описание, рейтинг, трейлер (YouTube-embed)
- Обработка ошибок API и пустых результатов

## Стек

React 19, TypeScript, React Router, Vite, Tailwind CSS 4. Данные - [TMDB API](https://www.themoviedb.org/documentation/api).

## Запуск

```bash
cd movie-app
npm install
```

Создать `.env` в `movie-app/` с ключом TMDB:

```
VITE_TMDB_KEY=your_token
```

```bash
npm run dev
```

## Деплой

GitHub Actions (`.github/workflows/deploy.yml`) собирает `movie-app` и
публикует на GitHub Pages при пуше в `main`. Ключ TMDB для собранного демо
берётся из репозиторного секрета `VITE_TMDB_KEY` (Settings → Secrets and
variables → Actions) - без него сборка задеплоится, но поиск не будет
находить фильмы.

## Структура

```
movie-app/
├── src/
│   ├── api/tmdb.ts       # клиент TMDB API
│   ├── components/       # карточки, сетка, панели поиска/пагинации
│   ├── pages/
│   │   ├── SearchPage.tsx
│   │   └── MoviePage.tsx
│   └── types/movies.ts
```
