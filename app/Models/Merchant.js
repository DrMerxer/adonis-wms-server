'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Merchant extends Model {
  getSize(barcode){
    const targetMerchant = Merchant
      .query()
      .where('barcode', '=', barcode)
      .fetch()

    const targetMerchantJSON = targetMerchant.toJSON()
    return targetMerchantJSON.size 
  }

  isFragile(barcode){
    const targetMerchant = Merchant
      .query()
      .where('barcode', '=', barcode)
      .fetch()

      const targetMerchantJSON = targetMerchant.toJSON()
      return targetMerchantJSON.fragile
  }


}

module.exports = Merchant
