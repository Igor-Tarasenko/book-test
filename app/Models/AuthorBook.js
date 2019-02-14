'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Timestamp = use('NoTimestamp')

class AuthorBook extends Model {
  book () {
    return this.hasMany('App/Model/Book')
  }
  author () {
    return this.hasMany('App/Model/Author')
  }
}

module.exports = AuthorBook
