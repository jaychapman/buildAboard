/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    }
  });

  return Review;
};
