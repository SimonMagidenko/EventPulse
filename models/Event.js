const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {
}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_date_time: {
            type: DataTypes.DATETIME,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        event_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
              },
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
              },
        }
    },


    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event',
    }
);

module.exports = Event;
