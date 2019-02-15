'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
  static boot () {
    super.boot()
    this.addTrait('NoTimestamp')
    //   /**
    //    * A hook to hash the user password before saving
    //    * it to the database.
    //    */
    //    this.addHook('beforeSave', async (userInstance) => {
    //     if (userInstance.dirty.password) {
    //       userInstance.password = await Hash.make(userInstance.password)
    //     }
  }
  author () {
    return this.belongsToMany('App/Model/Author')
  }
  user () {
    return this.belongsToMany('App/Model/User')
  }
}

module.exports = Book
