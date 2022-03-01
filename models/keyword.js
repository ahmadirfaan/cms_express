export default (sequelize, DataTypes) => {
  return sequelize.define('keyword', {
    name: DataTypes.STRING,
  });
};
