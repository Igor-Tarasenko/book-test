'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorBookSchema extends Schema {
  up () {
    this.create('author_books', (table) => {
      table.increments()
      table.integer('author_id', 10).notNullable()
      table.integer('book_id', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('author_books')
  }
}

module.exports = AuthorBookSchema
