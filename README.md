# Библиотека на нативном JS / sd-библиотека

(по учебным материалам BeOnMax)

1. HTML-компоненты
2. SCSS (по БЭМ, ну почти) - стили компонентов и общие, служебные стили
3. JS - **sd.prototype**, компоненты и служебные модули

## MODULES (JS/library) - общие служебные функции

(_sd.function_)

1. ### actions.js - различные действия

   **addHtml** - вставить HTML или (с пустыми скобками) посмотреть имеющийся HTML
   **findByIndex** - найти элемент по его индексу
   **findIndex** - найти индекс одного элемента среди соседей с общим родителем
   **findBySelector** - найти элемент по селектору
   **findClosest** - найти ближайшего родителя по селектору
   **findSiblings** - найти всех соседей, не включая сам элемент

2. ### animations.js - анимации

   **fadeIn** - появление по клику (через через opacity)
   **fadeOut** - исчезновение по клику (через через opacity)
   **fadeToggle** - появление и исчезновение по клику попеременно (через через opacity)

3. ### attributes.js - действия с scc-аттрибутами

   **addAttr** - добавить аттрибут и его значение
   **removeAttr** - удалить аттрибут и его значение
   **toggleAttr** - добавлять-удалять аттрибут и его значение

4. ### classes.js - действия с scc-классами

   **addClasses** - добавить классы (указываются в кавычках каждый, через запятую)
   **removeClasses** - удалить классы
   **toggleAttr** - добавлять-удалять ОДИН класс

5. ### display.js - действия с css-свойством display

   **show** - показать элемент через дисплей, который ему положен по верстке (сам подставляется в пустые кавычки)
   **hide** - скрыть элемент
   **toggle** -показывать-скрывать элемент

6. ### handlers.js - обработчики событий

   **on** - добавить addEventListener
   **off** - удалить addEventListener
   **click** - добавить addEventListener с действием по клику, если скобки пустые, клик вызывается программно

## GENERAL (SASS) - общие главные стили и переменные в формате sass

1. ### base.scss - базовые стили

   **.section** - отступы контента ()

2. ### typography.scss - шрифты
3. ### variables.scss - переменные
   _ЦВЕТА_
   **$primary | $dark | $light | $important | $success | $danger | $warning | $btw**

## HELPERS (SASS) - частоиспользуемые элементы стилей

1. ### align.scss

   **.text_center**
   **.block_center**

2. ### display.scss

   **.d_hidden** | **.d_visible**
   **.d_none | .d_block | .d_flex**
   **.d_f_centered | .d_f_space-around | .d_f_space-between** (размещение контента внутри флекса)

3. ### font.scss

   **.f_size-16 | .f_size-20 | .f_size-24** - размеры шрифта
   **.f_bold | .f_thin** - жирность шрифта
   **.f_italic** - стиль шрифта
   **.text_color-primary | .text_color-danger | .text_color-success | .text_color-warning | .text_color-dark** - цвета шрифта

4. ### margin.scss

   **.m-10 | .m-20 | m-30** - общие внешние отcтупы
   **.m_t-10 | .m_t-20** - верхние отступы
   **.m_r-10 | .m_r-20** - правые отступы
   **.m_b-10 | .m_b-20** - нижние отступы
   **.m_l-10 | .m_l-20** - левые отступы

5. ### padding.scss

   **.p-10 | .p-20** - общие внутренние отступы
   **.p_t-10 | .p_t-20** - верхние отступы
   **.p_r-10 | .p_r-20** - правые отступы
   **.p_b-10 | .p_b-20** - нижние отступы
   **.p_l-10 | .p_l-20** - левые отступы

6. ### size.scss
   **.w_p-100 | .w_p-50** - ширина в провысота
   **.w-300 | .w-500** - ширина в пикселях
   **.h_p-100 | .h_p-50** - высота в процентах
   **.h-300 | .h-500** - высота в пикселях

## COMPONENTS (JS/library) - функционал для компонентов

1. ### accordion.js
2. ### carousel.js
3. ### dropdownMenu.js
4. ### modal.js
5. ### tab.js

## COMPONENTS (SASS) - стили для компонентов

1. ### accordion.scss
2. ### button.scss
3. ### card.scss
4. ### carousel.js
5. ### dropdownMenu.js
6. ### modal.js
7. ### tab.js
