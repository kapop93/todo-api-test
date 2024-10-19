const { DataTypes } = require('sequelize');
const sequelize = require('../config');

var Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Todo;
