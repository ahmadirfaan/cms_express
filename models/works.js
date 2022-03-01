export default (sequelize, DataTypes) => {
  return sequelize.define('works', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    imageUrl: DataTypes.TEXT,
    workUrl: DataTypes.TEXT,
  });
};
