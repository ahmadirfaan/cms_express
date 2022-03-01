export default (sequelize, DataTypes) => {
  return sequelize.define('tags', {
    name: DataTypes.STRING,
  });
};
