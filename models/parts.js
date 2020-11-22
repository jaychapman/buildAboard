module.exports = function(sequelize, DataTypes) {
  const Part = sequelize.define("Part", {
    deck: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    truck: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    wheels: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    bearings: {
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

  return Part;
};
