'use strict'

/*
|--------------------------------------------------------------------------
| BAuthorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BAuthorSeeder {
  async run () {
    await Factory.model('App/Models/Author').createMany(30)
  }
}

module.exports = BAuthorSeeder
