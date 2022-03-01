export default (sequelize, DataTypes) => {
  const pages = sequelize.define('pages', {
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    image: DataTypes.TEXT,
    slug: DataTypes.TEXT,
  });
  pages.associate = function(models) {
    pages.hasMany(models.keyword, {
      foreignKey: 'keywordId',
      as: 'keyword',
    });
  };
  return pages;
};
