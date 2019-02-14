'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
  authors () {
    return this.belongsToMany('App/Model/Author')
  }
  users () {
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Book
