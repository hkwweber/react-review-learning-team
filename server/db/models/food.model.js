const Sequelize = require('sequelize');
const db = require('../index');

const Food = db.define('foods', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.imgur.com/JncGdNF.jpg'
  },
  price: {
  	type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  }


})

module.exports = Food;
