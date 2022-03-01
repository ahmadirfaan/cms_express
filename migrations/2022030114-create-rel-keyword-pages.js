module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('rel_keyword_pages', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      keyword_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'CASCADE',
        references: {
          model: 'keyword',
          Key: 'id',
          as: 'keyword_id',
        },
      },
      pages_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        onDelete: 'CASCADE',
        references: {
          model: 'pages',
          Key: 'id',
          as: 'pages_id',
        },
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('rel_keyword_pages');
  },
};
