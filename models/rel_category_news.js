const {v4: uuidv4} = require('uuid');
module.exports = (sequelize) => {
  const relCategoryNews = sequelize.define('rel_category_news', {}, {
    tableName: 'rel_category_news',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
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
  relCategoryNews.beforeCreate((r) => r.id = uuidv4());
  return relCategoryNews;
};
