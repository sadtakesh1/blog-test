# Просто блог

Тестовое задание: небольшой браузерный блог на чистом JavaScript.
Данные постов сохраняются в `localStorage`.

## Возможности

- список постов (заголовок, даты);
- создание нового поста;
- просмотр поста;
- редактирование;
- удаление.

## Технологии

- HTML, CSS, JavaScript (ES-модули)
- LocalStorage

## Запуск проекта

1. Установить зависимости:

```bash
npm install
```

2. Запустить dev-сервер

```
npm run dev
```

3. Открыть в браузере адрес, который покажет dev-сервер

## Структура проекта (основное)

```
src/
  main.js                 # точка входа, инициализация приложения
  styles/
    base.css              # базовые стили приложения

  components/
    layout/
      layout.js           # переключение экранов (list/edit/view)
      layout.css

    post-list/
      post-list.js        # рендер списка постов
      post-list.css

    post-form/
      post-form.js        # форма создания/редактирования поста
      post-form.css

    post-view/
      post-view.js        # экран просмотра поста
      post-view.css

  data/
    posts.js              # CRUD-операции с постами
    storage.js            # обёртка над localStorage
```
