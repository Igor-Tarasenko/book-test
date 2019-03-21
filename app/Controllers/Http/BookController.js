'use strict'
const Book = use('App/Models/Book');

class BookController {
  constructor () {
    this.fields = ['name', 'published_at', 'user_id']
  }
  async index () {
    return Book.all();
  }
  async show ({ params }) {
    return Book.findOrFail(params.id);
  }
  async store ({ request, response }) {
    response.status(201);
    return Book.create(request.only(this.fields));
  }
  async update ({ params, request }) {
    const book = await Book.findOrFail(params.id);
    book.merge(request.only(this.fields));
    await book.save();
    return book;
  }
  async destroy ({ params }) {
    const book = await Book.findOrFail(params.id);
    await book.delete();
  }
}

module.exports = BookController
