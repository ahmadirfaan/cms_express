export default (sequelize, DataTypes) => {
  const news = sequelize.define('news', {
    title: DataTypes.TEXT,
    image: DataTypes.TEXT,
    body: DataTypes.TEXT,
  });
  news.associate = function(models) {
    news.hasMany(models.tags, {
      foreignKey: 'tagsId',
      as: 'tags',
    });
    news.hasMany(models.keyword, {
      foreignKey: 'keywordId',
      as: 'keyword',
    });
    news.hasMany(models.categories, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };
  return news;
};
