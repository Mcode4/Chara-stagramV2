'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post,{foreignKey:'user_id'})
      User.hasMany(models.Follower,{foreignKey:'user_id'})
      User.belongsToMany(models.Follower,{foreignKey:'id'})
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true
    },
    bio: DataTypes.STRING(125),
    image: DataTypes.STRING,
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING(25),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};