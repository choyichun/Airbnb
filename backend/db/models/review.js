'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(
        models.User,
        {foreignKey: 'userId'}
      ),
      Review.belongsTo(
        models.Spot,
        {foreignKey: 'spotId'}
      ),
      Review.hasMany(
        models.Image, {
          foreignKey: 'reviewId', 
          onDelete: 'CASCADE', 
          hooks: true
        }
      )
    }
  }
  Review.init({
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        len:[1],
      }
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min: 1,
        max: 5,
        isInt: true
       }
    },
    userId: {
      type: DataTypes.INTEGER
    },
    spotId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};