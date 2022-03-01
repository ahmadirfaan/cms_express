const {v4: uuidv4} = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const teams = sequelize.define('teams', {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    order: DataTypes.INTEGER,
    image_url: DataTypes.TEXT,
  }, {
    tableName: 'teams',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  teams.beforeCreate((t) => t.id = uuidv4());
  return teams;
};
