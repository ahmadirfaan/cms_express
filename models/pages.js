const {v4: uuidv4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const pages = sequelize.define('pages', {
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    image: DataTypes.TEXT,
    slug: DataTypes.TEXT,
  }, {
    tableName: 'pages',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  pages.associate = function(models) {
    pages.hasMany(models.keyword, {
      foreignKey: 'keywordId',
      as: 'keyword',
    });
  };
  pages.beforeCreate((pages) => pages.id = uuidv4());
  return pages;
};
