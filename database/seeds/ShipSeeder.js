'use strict'

/*
|--------------------------------------------------------------------------
| ShipSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Ship = use('App/Models/Ship')
class ShipSeeder {
  async run () {
    const ships = [
      {
        "type":0,
        "addr":"Infinite Loop, BJS",
        "order_id":1
      },
      {
        "type":0,
        "addr":"小当家干脆面工厂",
        "order_id":2
      }
    ]
    Ship.createMany(ships)
  }
}

module.exports = ShipSeeder
