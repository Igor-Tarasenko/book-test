'use strict'

/*
|--------------------------------------------------------------------------
| AuthorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class AuthorSeeder {
  async run () {
    await Database.table('authors')
  }
}

module.exports = AuthorSeeder
