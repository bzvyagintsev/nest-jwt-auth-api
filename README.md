# JWT Authentication
API для создания нового пользователя и аутентификации.

API:

- Sign up: 84.201.128.110:3000/auth/signup
- Login: 84.201.128.110:3000/auth/login

```bash
body {
  username: "string",
  password: "string"
}
```

## Решение
Для решения использовались самый кластер БД MySQL b2.nano (vCPU 2, Memory 2ГБ, Хранилище 10ГБ, network-hdd) и виртуальная машина Compute Cloud (Intel Cascade Lake, гарантированная доля vCPU 20%, 1ГБ RAM, 3ГБ HDD)

Для БД и виртуальной машины настроены публичные IP адреса. Виртуальная машина подключается к БД по SSL.

## Технологии
Сервис разработан на:

- TypeScript
- [Nest](https://github.com/nestjs/nest)
- Passport
- TypeORM

Содержит три основных модуля

- AppModule, главный модуль приложения
- UsersModule, модуль пользователей
- AuthModule, модуль аутентификации

## Начало работы

## Установка

```bash
$ npm install
```

## Запуск

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run build
$ npm run start:prod
```

## Тесты

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```