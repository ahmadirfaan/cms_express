const {v4: uuidv4} = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const socialMedia = sequelize.define('social_media', {
    type: DataTypes.STRING,
    link: DataTypes.TEXT,
  }, {
    tableName: 'social_media',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  socialMedia.beforeCreate((s) => s.id = uuidv4());
  return socialMedia;
};
