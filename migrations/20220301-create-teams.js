module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      position: {
        type: DataTypes.STRING,
      },
      order: {
        type: DataTypes.INTEGER,
      },
      imageUrl: {
        type: DataTypes.TEXT,
      },
      socialMediaId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        onDelete: 'CASCADE',
        references: {
          model: 'socialMedia',
          Key: 'id',
          as: 'socialMediaId',
        },
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
    migration.dropTable('teams').done(done);
  },
};
