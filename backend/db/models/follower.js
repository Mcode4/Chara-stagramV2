'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Follower.hasMany(models.Users,{foreignKey:'id'})
      Follower.belongsTo(models.User,{foreignKey:'user_id'})
    }
  }
  Follower.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    follower_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Follower',
  });
  return Follower;
};