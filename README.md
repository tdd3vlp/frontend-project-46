### Hexlet tests and linter status:

[![Actions Status](https://github.com/tdd3vlp/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/tdd3vlp/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/c70e15872ce3b624b1c5/maintainability)](https://codeclimate.com/github/tdd3vlp/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c70e15872ce3b624b1c5/test_coverage)](https://codeclimate.com/github/tdd3vlp/frontend-project-46/test_coverage)

### Название проекта: 'Вычислитель отличий'

### Описание: 
Консольное приложение (CLI) для сравнения JSON и YAML файлов, которое позволяет выявлять различия и выводить результат в одном из доступных форматов. Приложение помогает пользователю легко видеть изменения как в плоских, так и в   сложных структурах, что делает его идеальным инструментом для анализа данных.

- Технологический стек: JavaScript, Commander.js для создания удобного интерфейса командной строки (CLI), js-yaml для работы с YAML-файлами, Lodash для манипуляции данными, Jest для модульного тестирования, ESLint и Prettier для автоматического форматирования и соблюдения кодстайла.
- Основные функции:
	- Сравнение JSON и YAML: Инструмент обрабатывает оба формата, позволяя сравнивать данные вне зависимости от структуры.
	- Несколько форматов вывода: Пользователь может выбрать формат отображения различий, что делает результаты удобными для дальнейшего анализа или интеграции с другими инструментами.
	- Поддержка вложенных структур: Приложение корректно отображает изменения и различия, даже если данные включают вложенные объекты и массивы.

### Установка и запуск:

1. Выполните *npm install*;
2. Выполните *gendiff -h*;
3. Следуйте инструкциям.

**Примеры:**

'Сравнение плоских JSON-файлов':
[![asciicast](https://asciinema.org/a/7J6hwxvJQi1iLO69NLrPQMpKA.svg)](https://asciinema.org/a/7J6hwxvJQi1iLO69NLrPQMpKA)

'Сравнение плоских YML-файлов':
[![asciicast](https://asciinema.org/a/SKQKWtlPjeNlq6nCNFDlwDaX3.svg)](https://asciinema.org/a/SKQKWtlPjeNlq6nCNFDlwDaX3)

'Сравнение файлов с вложенными структурами в формате *stylish*':
[![asciicast](https://asciinema.org/a/wai2fyfkKDYAB9ZOsK3w4wfbn.svg)](https://asciinema.org/a/wai2fyfkKDYAB9ZOsK3w4wfbn)

'Сравнение файлов с вложенными структурами в формате *plain*':
[![asciicast](https://asciinema.org/a/82JtuJi7fjwhGmqWAMpwkljXG.svg)](https://asciinema.org/a/82JtuJi7fjwhGmqWAMpwkljXG)

'Сравнение файлов с вложенными структурами в формате *JSON*':
[![asciicast](https://asciinema.org/a/DlpbYyAXnEPWvYcJeFJ4ID9nU.svg)](https://asciinema.org/a/DlpbYyAXnEPWvYcJeFJ4ID9nU)
