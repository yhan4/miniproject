const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')
const Country = require('./country')

const Currency = sequelize.define('Currency', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    currencyCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    convertionRate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    countryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: 'id',
        }
    }
})

Currency.belongsTo(Country, { foreignKey: 'countryID' })

module.exports = Currency