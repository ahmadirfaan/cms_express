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
      image_url: {
        type: Sequelize.TEXT,
      },
      work_url: {
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: function(migration, DataTypes, done) {
    return migration.dropTable('works').done(done);
  },
};
