'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Shelf extends Model {
  //find the 
  warehouse(){
    return this.belongsTo(
      'App/Models/Warehouse'
    )
  }

  cargo(){
    return this.hasMany(
      'App/Models/Cargo'
    )
  }
}

module.exports = Shelf
