export default (sequelize, DataTypes) => {
  const teams = sequelize.define('teams', {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    order: DataTypes.INTEGER,
    image_url: DataTypes.TEXT,
  });
  teams.associate = function(models) {
    teams.hasMany(models.socialMedia, {
      foreignKey: 'social_media_id',
      as: 'social_media',
    });
  };
  return teams;
};
