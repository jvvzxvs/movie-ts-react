# Movie Search

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
