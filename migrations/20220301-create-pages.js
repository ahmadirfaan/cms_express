module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('pages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      body: {
        type: DataTypes.TEXT,
      },
      slug: {
        type: DataTypes.TEXT,
      },
      keywordId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        onDelete: 'CASCADE',
        references: {
          model: 'keyword',
          Key: 'id',
          as: 'keywordId',
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
    migration.dropTable('pages').done(done);
  },
};
