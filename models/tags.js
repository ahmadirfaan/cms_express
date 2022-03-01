const {v4: uuidv4} = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const tags = sequelize.define('tags', {
    name: DataTypes.STRING,
  }, {
    tableName: 'tags',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  tags.beforeCreate((t) => t.id = uuidv4());
  return tags;
};
