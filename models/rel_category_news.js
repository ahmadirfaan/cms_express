export default (sequelize, DataTypes) => {
  const relCategoryNews = sequelize.define('rel_category_news', {});
  relCategoryNews.associate = function(models) {
    relCategoryNews.hasMany(models.category, {
      foreignKey: 'category_id',
      as: 'category',
    });
    relCategoryNews.hasMany(models.news, {
      foreignKey: 'news_id',
      as: 'news',
    });
  };
  return relCategoryNews;
};
