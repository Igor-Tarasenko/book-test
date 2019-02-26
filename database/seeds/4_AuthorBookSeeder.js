'use strict'

/*
|--------------------------------------------------------------------------
| CAuthorBookSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Book = use('App/Models/Book')
const Author = use('App/Models/Author')

class AuthorBookSeeder {
  async run () {
    const bookIds = await Book.ids();
    const authorIds = await Author.ids();
    await Promise.all(authorIds.reduce((promises, book_id, index) => {
      promises.push(Factory.model('App/Models/AuthorBook').create({ author_id: book_id, book_id }));
      if (book_id % 2 === 0) {
        promises.push(Factory.model('App/Models/AuthorBook').create({ author_id: bookIds[index - 1], book_id }))
      }
      return promises;
    }, []))
  }
}
module.exports = AuthorBookSeeder
