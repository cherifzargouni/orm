const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', '22468199', {
  dialect: 'mysql',
  host: 'localhost'
});





module.exports = sequelize;

