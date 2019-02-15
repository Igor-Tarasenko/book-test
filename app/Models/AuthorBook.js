'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AuthorBook extends Model {
  static boot () {
    super.boot()
    this.addTrait('NoTimestamp')
  }

  book () {
    return this.hasMany('App/Model/Book')
  }
  author () {
    return this.hasMany('App/Model/Author')
  }
}

module.exports = AuthorBook
