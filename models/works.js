const {v4: uuidv4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const works = sequelize.define('works', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    image_url: DataTypes.TEXT,
    work_url: DataTypes.TEXT,
  }, {
    tableName: 'works',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  works.beforeCreate((w) => w.id = uuidv4());
  return works;
};
