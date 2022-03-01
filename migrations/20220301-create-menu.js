module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('menu', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.TEXT,
      },
      order: {
        type: Sequelize.INTEGER,
      },
      parentId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'CASCADE',
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('menu');
  },
};
