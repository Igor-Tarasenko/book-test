'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Author extends Model {
  static boot () {
    super.boot()
    this.addTrait('NoTimestamp')
  }

  book () {
    return this.belongsToMany('App/Model/Book')
  }
}

module.exports = Author
