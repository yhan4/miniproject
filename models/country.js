const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')

const Country = sequelize.define('Country', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Country;