'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Merchant extends Model {
  cargoes(){
    return this.hasMany(
      'App/Models/Cargo'
    )
  }

  orders(){
    return this.hasMany(
      'App/Models/Order'
    )
  }

}

module.exports = Merchant
