'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Author extends Model {
  books () {
    return this.belongsToMany('App/Model/Book')
  }
}

module.exports = Author
