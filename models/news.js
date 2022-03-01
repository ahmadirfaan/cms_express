const {v4: uuidv4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const news = sequelize.define('news', {
    title: DataTypes.TEXT,
    image: DataTypes.TEXT,
    body: DataTypes.TEXT,
  }, {
    tableName: 'news',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  news.beforeCreate((news) => news.id = uuidv4());
  return news;
};
