'use strict'

class BookValidator {
  get rules () {
    return {
      name: 'required',
      published_at: 'required|date',
      user_id: 'integer'
    }
  }
}

module.exports = BookValidator
