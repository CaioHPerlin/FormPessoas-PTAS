'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      {nome: 'Caio', sobrenome: 'Perlin', idade: '16', altura: '175'},
      {nome: 'Arthas', sobrenome: 'Menethil', idade: '25', altura: '180'},
      {nome: 'Uther', sobrenome: 'Lightforged', idade: '53', altura: '180'},
      {nome: 'Jeroy', sobrenome: 'Jenkins', idade: '15', altura: '100'},
      {nome: 'moonie', sobrenome: 'oliveira', idade: '17', altura: '175'},
      {nome: 'renato', sobrenome: 'rodas', idade: '18', altura: '203'},
      {nome: 'lil', sobrenome: 'rafas', idade: '16', altura: '120'},
      {nome: 'lipe', sobrenome: 'lima', idade: '36', altura: '3'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
