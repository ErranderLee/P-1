const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = class Post extends Model {
    static init(sequelize) {
        return super.init({
            postid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            board: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            title: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            author: {
                type: DataTypes.STRING(30),
                allowNull: true,
            }
        }, {
            sequelize,
            modelName: 'Post',
            tableName: 'posts',
            timestamps: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.User);
    }
}