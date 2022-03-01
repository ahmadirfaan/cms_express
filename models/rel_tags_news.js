export default (sequelize, DataTypes) => {
  const relTagsNews = sequelize.define('rel_tags_news', {});
  relTagsNews.associate = function(models) {
    relTagsNews.hasMany(models.tags, {
      foreignKey: 'tags_id',
      as: 'tags',
    });
    relTagsNews.hasMany(models.news, {
      foreignKey: 'news_id',
      as: 'news',
    });
  };
  return relTagsNews;
};
