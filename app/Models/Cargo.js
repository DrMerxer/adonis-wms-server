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

  tag_id(){
    return this.belongsTo(
      'App/Models/Rfid'
    )
  }

  rfid(){
    return this.hasOne(
      'App/Models/Rfid'
    )
  }
}


module.exports = Cargo
