module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define("Order", {
    orderDeck: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    orderTruck: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    orderWheels: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    orderBearings: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    email: {
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

  return Order;
};
