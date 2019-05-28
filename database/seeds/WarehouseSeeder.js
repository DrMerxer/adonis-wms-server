'use strict'

/*
|--------------------------------------------------------------------------
| WarehouseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Warehouse = use('App/Models/Warehouse')
class WarehouseSeeder {
  async run () {
    const warehouses = [
      {
        "alias":"Bermingham",
        "balance":100000
      }
    ]

    Warehouse.createMany(warehouses)
  }
}

module.exports = WarehouseSeeder
