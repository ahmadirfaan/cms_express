const {v4: uuidv4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const keyword = sequelize.define('keyword', {
    name: DataTypes.STRING,
  }, {
    tableName: 'keyword',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  keyword.beforeCreate((keyword) => keyword.id = uuidv4());
  return keyword;
};
