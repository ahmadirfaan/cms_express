module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('works', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      order: {
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.TEXT,
      },
      workUrl: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: function(migration, DataTypes, done) {
    return migration.dropTable('works').done(done);
  },
};
