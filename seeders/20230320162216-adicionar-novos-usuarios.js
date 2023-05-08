'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
    { nome: 'John Doe' },
    { nome: 'Caio Hygino' },
    { nome: 'Luiz Picolo' },
    { nome: 'Moonie de Oliveira' },
    { nome: 'Filipe Pereira' },
    { nome: 'Roberto Rodas' }
  ], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('usuarios', null, {});
  }
};
