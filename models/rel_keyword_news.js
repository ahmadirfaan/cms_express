const {v4: uuidv4} = require('uuid');
module.exports = (sequelize) => {
  const relKeywordNews = sequelize.define('rel_keyword_news', {}, {
    tableName: 'rel_keyword_news',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
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
  relKeywordNews.beforeCreate((relKeywordNews) => relKeywordNews.id = uuidv4());
  return relKeywordNews;
};
