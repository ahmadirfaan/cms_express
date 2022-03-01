export default (sequelize, DataTypes) => {
  return sequelize.define('menu', {
    name: DataTypes.STRING,
    url: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    parentId: DataTypes.STRING,
  });
};
