export default (sequelize, DataTypes) => {
  const relKeywordNews = sequelize.define('rel_keyword_news', {});
  relKeywordNews.associate = function(models) {
    relKeywordNews.hasMany(models.keyword, {
      foreignKey: 'keywordId',
      as: 'keyword',
    });
    relKeywordNews.hasMany(models.news, {
      foreignKey: 'newsId',
      as: 'news',
    });
  };
  return relKeywordNews;
};
