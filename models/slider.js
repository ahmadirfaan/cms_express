export default (sequelize, DataTypes) => {
  return sequelize.define('slider', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    imageUrl: DataTypes.TEXT,
  });
};
