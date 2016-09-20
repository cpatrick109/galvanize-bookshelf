'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (table) => {
        table.increments();
        table.string('title').notNullable().defaultTo('');
        table.string('author').notNullable().defaultTo('');
        table.string('genre').notNullable().defaultTo('');
        table.text('description').notNullable().defaultTo('');
        table.text('cover_url').notNullable().defaultTo('');
        table.timestamps(true, true);
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books');
};



// 'use strict';
//
// exports.up = function(knex) {
//   return knex.schema.createTable('artists', (table) => {
//     table.increments();
//     table.string('name').notNullable().defaultTo('');
//     table.timestamps(true, true);
//   })
// };
//
// exports.down = function(knex) {
//   return knex.schema.dropTable('artists');
// };
