exports.up = (knex) => knex.schema.createTable('books', (table) => {
    table.increments('id').primary();
    table.string('author').notNullable();
    table.string('title').notNullable();
    table.string('description');
});

exports.down = (knex) => knex.schema.dropTableIfExists('books');
