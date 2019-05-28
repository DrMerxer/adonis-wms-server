'use strict'

/*
|--------------------------------------------------------------------------
| OrderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Order = use('App/Models/Order')
class OrderSeeder {
  async run () {
    const orders = [
      {
        "name":"小浣熊干脆面",
        "type":0,
        "status":0,
        "company":"统一食品",
        "amount":50
      },
      {
        "name":"新一冰箱",
        "type":0,
        "status":0,
        "company":"新一电器",
        "amount":5
      },
      {
        "name":"双汇火腿肠",
        "type":0,
        "status":1,
        "company":"双汇肉业",
        "amount":50
      },
      {
        "name":"小林制药擦镜布",
        "type":0,
        "status":1,
        "company":"小林制药",
        "amount":50
      },
      {
        "name":"苏伯蛋花汤",
        "type":0,
        "status":1,
        "company":"苏伯食品",
        "amount":120
      }
    ]
    Order.createMany(orders)
  }
}

module.exports = OrderSeeder
