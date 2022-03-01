const {v4: uuidv4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
  }, {
    tableName: 'category',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  category.beforeCreate((category) => category.id = uuidv4());
  return category;
};
