## deno2-nestjs-starter

Пример проекта NestJS на базе Deno v2

---

### 🚀 Быстрый старт

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/merdernoty/deno2-nestjs-starter.git
   cd deno2-nestjs-starter
   ```

2. Установите зависимости и зафиксируйте замки (рекомендуется):

   ```bash
   deno cache --lock=lock.json --lock-write src/main.ts
   ```

3. Запустите приложение в режиме разработки:

   ```bash
   deno run --import-map=import_map.json \
     --allow-env \
     --allow-read \
     --allow-net \
     --unstable \
     src/main.ts
   ```

   Или используйте задачу из `deno.json`:

   ```bash
   deno task dev
   ```

4. Перейдите в браузере по адресу:

   ```
   http://localhost:3000
   ```

---

### 📁 Структура проекта

```
deno2-nestjs-starter/
├── src/
│──── modules/             # папка модулей
│────── users/             # тестовый пример модуля
│───────── dto
│───────── entities
│───────── users.controller.ts
│───────── users.module.ts
│───────── users.service
│   ├── app.module.ts      # главный модуль NestJS
│   ├── main.ts            # точка входа
│   └── ...                # остальные модули, контроллеры и сервисы
├── import_map.json        # маппинг URL-модулей на локальные пути
├── deno.json              # конфигурация Deno (tasks, lock, import_map)
├── lock.json              # зафиксированные хэши зависимостей
└── README.md              # этот файл
```

---

### ⚙️ Конфигурация Deno

- **import\_map.json** — карта импорта внешних зависимостей
- **lock.json** — зафиксированные версии и хэши модулей
- **deno.json** — задачи (`dev`, `start`) и параметры запуска

### 📝 Основные команды

- `deno task dev` — запуск в режиме разработки с горячей перезагрузкой
- `deno cache src/main.ts` — загрузка и кеширование зависимостей
- `deno fmt` — автоформатирование кода
- `deno lint` — проверка стиля и потенциальных ошибок
- `deno test` — запуск тестов

---

### ❓ Часто задаваемые вопросы

**Почему NestJS на Deno?** Используя Deno, мы получаем встроенную безопасность
прав доступа, современный движок V8 и единый бинарник без внешних зависимостей.

**Как добавить новую зависимость?**

1. Импортируйте её по URL в `deps.ts` или напрямую в коде.
2. Выполните `deno cache` или `deno cache --lock=lock.json --lock-write`.

**Как зафиксировать версии?** Используйте `--lock=lock.json` и `--lock-write`
при первом кэшировании.

---

### 📄 Лицензия

MIT © [merdernoty](https://github.com/merdernoty)
