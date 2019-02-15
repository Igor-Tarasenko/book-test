'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    name: faker.name(),
    email: faker.email(),
    password: faker.password(),
    photo: faker.file(),
    registration_date: faker.date()
  }
})

Factory.blueprint('App/Models/Book', async (faker, data) => {
  return {
    name: faker.name(),
    published_at: faker.date({american: false}),
    user_id: data.user_id || null
  }
})

Factory.blueprint('App/Models/Author', async (faker) => {
  return {
    firstName: faker.first(),
    lastName: faker.last(),
    birthday: faker.date({american: false})
  }
})

Factory.blueprint('App/Models/AuthorBook', async (faker) => {
  return {
    author_id: async () => {
      return (await Factory.model('App/Models/Author').create()).id
    },
    book_id: async () => {
      return (await Factory.model('App/Models/Book').create()).id
    }
  }
})
const user = Factory.model('App/Models/User').create()
const book = Factory.model('App/Models/Book').create()
const author = Factory.model('App/Models/Author').create()
const author_book = Factory.model('App/Models/AuthorBook').create()


