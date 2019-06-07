'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Merchant extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeSave', 'MerchantHook.savePrice')
    this.addHook('afterFind', 'MerchantHook.readPrice')
    this.addHook('afterFind', 'MerchantHook.readCost')
    this.addHook('beforeSave', 'MerchantHook.saveCost')
    this.addHook('afterFind', 'MerchantHook.readFragile')
    this.addHook('afterFind', 'MerchantHook.readSize')
    this.addHook('beforeSave', 'MerchantHook.saveSize')
    this.addHook('beforeSave', 'MerchantHook.saveFragile')
  }

  orders(){
    return this.hasMany(
      'App/Models/Order'
    )
  }



}

module.exports = Merchant
