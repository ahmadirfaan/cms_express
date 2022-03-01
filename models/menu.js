const {v4: uuidv4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    url: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    parent_id: DataTypes.STRING,
  }, {
    tableName: 'menu',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  menu.beforeCreate((menu) => menu.id = uuidv4());
  return menu;
};
