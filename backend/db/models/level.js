'use strict';
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    sequence: {
     type: DataTypes.STRING,
     allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hintOne: { 
      type: DataTypes.STRING
    },
    hintTwo: {
      type: DataTypes.STRING
    },
    hintThree: {
      type: DataTypes.STRING
    },
    levelId: { 
      type:DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER
    }
  }, {});
  Level.associate = function(models) {
    Level.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
  };
  return Level;
};