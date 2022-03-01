export default (sequelize, DataTypes) => {
  return sequelize.define('social_media', {
    type: DataTypes.STRING,
    link: DataTypes.TEXT,
  });
};
