const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_db', 'postgres', 'popov', {
    host: 'localhost',
    dialect: 'postgres',
});
module.exports = sequelize;
