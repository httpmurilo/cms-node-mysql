const Sequlize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

const Article = connection.define('articles', {
    title:{
        type: Sequlize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequlize.STRING,
        allowNull: false
    },
    body:{
        type: Sequlize.TEXT,
        allowNull: false
    }
});
//uma categoria tem muitos artigos
Category.hasMany(Article);
//1 artigo pertence a uma categoria
Article.belongsTo(Category);


module.exports = Article;
