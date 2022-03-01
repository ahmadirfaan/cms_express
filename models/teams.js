export default (sequelize, DataTypes) => {
  const teams = sequelize.define('teams', {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    order: DataTypes.INTEGER,
    imageUrl: DataTypes.TEXT,
  });
  teams.associate = function(models) {
    teams.hasMany(models.socialMedia, {
      foreignKey: 'social_media_id',
      as: 'socialMedia',
    });
  };
  return teams;
};
