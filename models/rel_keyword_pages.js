const {v4: uuidv4} = require('uuid');
module.exports = (sequelize) => {
  const relKeywordPages = sequelize.define('rel_pages_news', {}, {
    tableName: 'rel_pages_news',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
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
  relKeywordPages.beforeCreate((rkp) => rkp.id = uuidv4());
  return relKeywordPages;
};
