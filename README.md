# GO: space adventures

Тестовое задание на позицию Frontend Developer: одностраничное SPA-приложение, свёрстанное по макету из Figma.

Демо: [annadaniuk777.github.io/go-space-adventures](https://annadaniuk777.github.io/go-space-adventures/)

Макет: [Figma](https://www.figma.com/design/t1LDcmSJayK5HeqO5f96gM/TEST--Copy-)

## Версии

- Node.js v22.22.2
- npm 10.9.7

## Запуск

```bash
npm install
npm run dev
```

Проект откроется на `http://localhost:3000`.

| Команда | Что делает |
| --- | --- |
| `npm run dev` | запускает сервер разработки |
| `npm run build` | собирает проект в папку `dist` |
| `npm run preview` | открывает собранную версию |
| `npm run convert-rastr` | создаёт webp-версии всех jpg и png из `src/img` |
| `npm run optimize-svg` | сжимает все svg из `src/img` через svgo |
| `npm run subset-fonts` | собирает облегчённые шрифты Lato в `src/fonts`: только латиница и типографская пунктуация |

## Стек

- React 19
- Vite 8
- SCSS (Sass), методология БЭМ
- sharp и vite-plugin-image-optimizer для оптимизации картинок
- svgo для сжатия svg
- subset-font и lato-font для облегчённых шрифтов

Проект создан на Vite, а не через `create-react-app`: CRA больше не поддерживается, и команда React сейчас рекомендует Vite. Вёрстка разбита на компоненты, корневой компонент `src/App.jsx`. Стили каждого компонента лежат рядом с ним и подключаются в самом компоненте, а общие стили и блоки подключаются через `src/App.scss`.

## Что сделано

- Адаптивная вёрстка по трём вьюпортам макета: 360, 768 и 1248px. Между ними страница тоже не ломается, минимальная ширина 360px.
- Сетки на flex и grid, без фреймворков и CSS-модулей.
- Фоны hero и карточек собраны через multiple backgrounds: градиент поверх картинки.
- Картинки в webp с запасным jpg/png и в двух плотностях через `image-set()`. Логотип и иконка корзины в SVG, сжатом через svgo, планеты и орбита нарисованы на CSS.
- Шрифты облегчены: из Lato оставлены только латиница и типографская пунктуация, поэтому каждый файл весит 28 КБ вместо 180 КБ. Полные шрифты берутся из npm-пакета `lato-font`.
- Hover-состояния по макету, плюс focus для навигации с клавиатуры и active при нажатии.
- Бургер-меню на мобильной версии: открывается и закрывается с анимацией, закрывается по Escape, по клику на затемнение и по пункту меню.
- Кнопка Read more раскрывает и сворачивает текст без JavaScript, только на CSS (чекбокс и `:checked`).
- Анимация в hero: вращается орбита с планетами, парит ракета. Если в системе включено уменьшение анимаций, всё останавливается.

## Структура

```text
src/
  App.jsx          корневой компонент
  App.scss         подключение общих стилей
  main.jsx         точка входа
  components/      Header, Hero, Offers, Card, Journey, Footer, Overlay и их стили
  data/offers.js   данные карточек
  hooks/useMenu.js логика мобильного меню
  sass/common/     переменные, миксины, шрифты, общие стили
  sass/blocks/     общие БЭМ-блоки: button, container, page-body, visually-hidden
  img/             картинки
  fonts/           шрифт Lato
static/            статическая версия до переноса в React
.github/workflows/ деплой на GitHub Pages
```

## Статическая версия

Сначала я сверстала страницу обычным HTML, SCSS и JavaScript, сверила её с макетом и только потом перенесла в React-компоненты. Эта версия лежит в папке `static/` и использует те же стили. Посмотреть её можно после `npm run dev` по адресу `http://localhost:3000/static/`.

## Деплой

Сайт публикуется на GitHub Pages через GitHub Actions. При каждом пуше в `main` workflow `.github/workflows/deploy.yml` устанавливает зависимости, собирает проект и выкладывает папку `dist`.

## Время

На проект ушло около 5 часов.
