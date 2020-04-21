const process = require('process');
const fs = require('fs');

const username = process.env.POSTGRES_USER || 'user1';
const password = process.env.POSTGRES_PASSWORD || 'testpass';
const crt = fs.readFileSync('./root.crt') || undefined;

module.exports = {
  type: 'mysql',
  host: 'rc1a-ulj3bqjzol288q5c.mdb.yandexcloud.net',
  port: 3306,
  username: 'user1',
  password: 'testpass',
  database: 'db1',
  ssl: crt
    ? {
        ca: crt,
      }
    : false,
  entities: [__dirname + "/**/*.entity.js"],
  migrations: ['/migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
  synchronize: true,
};
