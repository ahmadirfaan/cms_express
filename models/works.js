export default (sequelize, DataTypes) => {
  return sequelize.define('works', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    image_url: DataTypes.TEXT,
    work_url: DataTypes.TEXT,
  });
};
