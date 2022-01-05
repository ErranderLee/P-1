const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = class User extends Model {
    static init(sequelize) {
        return super.init({
            userid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
        }, {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            timestamps: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.User.hasMany(db.Post);
    }
}