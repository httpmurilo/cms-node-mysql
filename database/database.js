const Sequelize = require('sequelize');

const connection = new Sequelize('testemurilo','muriloeduardo','Slacksda52381',{
    host:'mysql669.umbler.com',
    port: 41890,
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;