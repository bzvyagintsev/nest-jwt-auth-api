const process = require('process');
const fs = require('fs');

const username = process.env.DB_USER || 'user1';
const password = process.env.DB_PASSWORD || 'testpass';

const crt = fs.readFileSync(__dirname + '/root.crt');

module.exports = {
  type: 'mysql',
  host: 'rc1a-ulj3bqjzol288q5c.mdb.yandexcloud.net',
  port: 3306,
  username,
  password,
  database: 'db1',
  ssl: {
    ca: crt,
  },
  entities: [__dirname + '/**/*.entity.js'],
  migrations: ['/migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
  synchronize: true,
};
