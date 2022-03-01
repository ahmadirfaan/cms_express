module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('news', {
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
      tagsId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        onDelete: 'CASCADE',
        references: {
          model: 'tags',
          Key: 'id',
          as: 'tagsId',
        },
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
      categoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        onDelete: 'CASCADE',
        references: {
          model: 'category',
          Key: 'id',
          as: 'categoryId',
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
    migration.dropTable('news').done(done);
  },
};
