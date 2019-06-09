'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Cargo extends Model {
  barcode(){
    return this.belongsTo(
      'App/Models/Merchants',
      'barcode',
      'id'
    )
  }

  shelf(){
    return this.belongsTo(
      'App/Models/Shelf'
    )
  }

  order(){
    return this.belongsTo(
      'App/Models/Order'
    )
  }

  rfid(){
    return this.belongsTo(
      'App/Models/Rfid'
    )
  }

  ship(){
    return this.belongsTo(
      'App/Models/Ship'
    )
  }
}


module.exports = Cargo
