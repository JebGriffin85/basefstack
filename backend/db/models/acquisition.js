'use strict';
module.exports = (sequelize, DataTypes) => {
  const Acquisition = sequelize.define('Acquisition', {
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    projectId: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    repoLink: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isCompleted: DataTypes.BOOLEAN
  }, {});
  Acquisition.associate = function(models) {
    Acquisition.belongsTo(models.User, { foreignKey: 'userId' });
    Acquisition.belongsTo(models.Project, { foreignKey: 'projectId' });
  };
  return Acquisition;
};