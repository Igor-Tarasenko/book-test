'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Timestamp = use('NoTimestamp')

class Book extends Model {
  author () {
    return this.belongsToMany('App/Model/Author')
  }
  user () {
    return this.belongsToMany('App/Model/User')
  }
}

module.exports = Book
