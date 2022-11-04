'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: {
     type: DataTypes.STRING,
     allowNull: false
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Project.associate = function(models) {
    Project.belongsTo(models.User, { foreignKey: 'userId' });
    Project.hasMany(models.Acquisition, { foreignKey: 'projectId' });
  };
  return Project;
};