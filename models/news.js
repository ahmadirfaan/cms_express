export default (sequelize, DataTypes) => {
  const news = sequelize.define('news', {
    title: DataTypes.TEXT,
    image: DataTypes.TEXT,
    body: DataTypes.TEXT,
  });
  return news;
};
