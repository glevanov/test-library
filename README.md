# Библиотека книг
Тестовое задание по написанию библиотеки книг на React.

### Быстрый старт
```
git clone https://github.com/glevanov/test-library.git
cd test-library
yarn install
yarn run start
```

### Описание
Приложение состоит из трёх страниц - список книг, окно добавления книги, окно просмотра и редактирования.
Переключение между страницами реализовано через роутер.

Реализованы функции добавления, просмотра и редактирования книг.
Удаление книг ТЗ не предусмотрено.

Валидация полей реализована через HTML5.
Для валидации ISBN использован [simple-isbn](https://github.com/sactor/simple-isbn).

Для отображения рейтинга в виде звёздочек использован компонент [react-star-rating-component
](https://github.com/voronianski/react-star-rating-component).


### Не реализовано
* сохранение состояния
