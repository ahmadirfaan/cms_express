module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('social_media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        type: DataTypes.STRING,
      },
      link: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('social_media').done(done);
  },
};
