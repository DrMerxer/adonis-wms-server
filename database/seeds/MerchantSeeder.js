'use strict'

/*
|--------------------------------------------------------------------------
| MerchantSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Merchat = use('App/Models/Merchant')
class MerchantSeeder {
  async run () {
    const merchants = [
      {
        name:'小林制药-擦镜布',
        order_id:4,
        attr:'日用品',
        barcode:'6921317996500',
        price:2300,
        //Use an integer to accurate to 'FEN' avoid float culculate error
        amount:50,
        arrived:0,
        checked:0,
        departured:0
      },
      {
        name:'苏伯蛋花汤',
        order_id:5,
        attr:'食品',
        barcode:'6932583206590',
        price:2000,
        //Use an integer to accurate to 'FEN' avoid float culculate error
        amount:120,
        arrived:0,
        checked:0,
        departured:0
      },{
        name:'双汇火腿肠整箱',
        order_id:3,
        attr:'食品',
        barcode:'6902890882435',
        price:2300,
        //Use an integer to accurate to 'FEN' avoid float culculate error
        amount:50,
        arrived:0,
        checked:0,
        departured:0
      }
    ]
  }
}

module.exports = MerchantSeeder
