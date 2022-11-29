const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phno: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = User;