'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Shelf extends Model {
  static boot(){
    super.boot()

    this.addHook('afterPaginate', 'ShelfHook.readSizes')
    this.addHook('afterPaginate', 'ShelfHook.readTypes')
  }
  
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
