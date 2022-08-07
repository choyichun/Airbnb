'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Images.init({
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max: 10,
      }
    },
    prviewimage: {
      type: DataTypes.BOOLEAN
    },
    spotId: {
      type: DataTypes.INTEGER
    },
    reviewId: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Images',
  });
  return Images;
};