'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNUll: false,
      },
      rua: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('addresses');
  }
};
