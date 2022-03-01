export default (sequelize, DataTypes) => {
  return sequelize.define('socialMedia', {
    type: DataTypes.STRING,
    link: DataTypes.TEXT,
  });
};
