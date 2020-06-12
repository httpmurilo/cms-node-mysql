const Sequlize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('categories', {
    title:{
        type: Sequlize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequlize.STRING,
        allowNull: false
    }
});



module.exports = Category;
