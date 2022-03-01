const {v4: uuidv4} = require('uuid');
module.exports = (sequelize) => {
  const relSocialMediaTeams = sequelize.define('rel_socialmedia_teams', {}, {
    tableName: 'rel_socialmedia_teams',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
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
  relSocialMediaTeams.beforeCreate((rs) => rs.id = uuidv4());
  return relSocialMediaTeams;
};
