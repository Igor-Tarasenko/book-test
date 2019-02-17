'use strict'

/*
|--------------------------------------------------------------------------
| AuthorBookSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class AuthorBookSeeder {
  async run () {
    await Database.table('author_books')
    await Factory.model('App/Models/AuthorBook').createMany(5)
  }
}

module.exports = AuthorBookSeeder
