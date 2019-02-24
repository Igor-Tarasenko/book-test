'use strict'

/*
|--------------------------------------------------------------------------
| AUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AUserSeeder {
  async run () {
    await Factory.model('App/Models/User').createMany(30)
  }
}

module.exports = AUserSeeder
