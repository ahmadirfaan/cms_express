const {v4: uuidv4} = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const slider = sequelize.define('slider', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    image_url: DataTypes.TEXT,
  }, {
    tableName: 'slider',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  slider.beforeCreate((s) => s.id = uuidv4());
  return slider;
};
