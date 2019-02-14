'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.date('published_at').notNullable()
      table.integer('user_id', 10).unsigned().nullable()
      table.foreign('user_id').references('id').inTable('users').onDelete('set null')
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema
