'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Cargo = use('App/Models/Cargo')
class Order extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeSave', 'OrderHook.saveType')
    this.addHook('afterFind', 'OrderHook.readType')
    this.addHook('beforeSave', 'OrderHook.saveStatus')
    this.addHook('afterFind', 'OrderHook.readStatus')
  }

  merchant() {
    return this.belongsTo(
      'App/Models/Merchant'
    )
  }

  finance() {
    return this.hasOne(
      'App/Models/Finance'
    )
  }

  ship() {
    return this.hasOne(
      'App/Models/Ship'
    )
  }
  cargo() {
    return this.hasMany(
      'App/Models/Cargo'
    )
  }
}

module.exports = Order
