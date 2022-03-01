const {v4: uuidv4} = require('uuid');
module.exports = (sequelize) => {
  const relTagsNews = sequelize.define('rel_tags_news', {}, {
    tableName: 'rel_tags_news',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
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
  relTagsNews.beforeCreate((rt) => rt.id = uuidv4());
  return relTagsNews;
};
