const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookingapp-users', 'root', 'YahaAbhiIsiWaqt@0', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
