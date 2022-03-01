module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
      },
      position: {
        type: Sequelize.STRING,
      },
      order: {
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.TEXT,
      },
      socialMediaId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'CASCADE',
        references: {
          model: 'socialMedia',
          Key: 'id',
          as: 'socialMediaId',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: function(migration, DataTypes, done) {
    return migration.dropTable('teams');
  },
};
