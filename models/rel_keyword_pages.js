export default (sequelize, DataTypes) => {
  const relKeywordPages = sequelize.define('rel_pages_news', {});
  relKeywordPages.associate = function(models) {
    relKeywordPages.hasMany(models.keyword, {
      foreignKey: 'keyword_id',
      as: 'keyword',
    });
    relKeywordPages.hasMany(models.news, {
      foreignKey: 'pages_id',
      as: 'pages',
    });
  };
  return relKeywordPages;
};
