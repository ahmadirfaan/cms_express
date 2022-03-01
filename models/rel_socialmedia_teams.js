export default (sequelize, DataTypes) => {
  const relSocialMediaTeams = sequelize.define('rel_socialmedia_teams', {});
  relSocialMediaTeams.associate = function(models) {
    relSocialMediaTeams.hasMany(models.social_media, {
      foreignKey: 'social_media_id',
      as: 'social_media',
    });
    relSocialMediaTeams.hasMany(models.teams, {
      foreignKey: 'teams_id',
      as: 'teams',
    });
  };
  return relTagsNews;
};
