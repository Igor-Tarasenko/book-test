'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Timestamp = use('NoTimestamp')

class Author extends Model {
  book () {
    return this.belongsToMany('App/Model/Book')
  }
}

module.exports = Author
