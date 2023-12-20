import { Sequelize } from 'sequelize';

const password = process.env.MYSQL_PASS as string;
const sequelize = new Sequelize('foodDB', 'root', password, {
    dialect: 'mysql',
    host: 'localhost'
});