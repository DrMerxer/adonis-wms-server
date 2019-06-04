'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run() {
    const warehouse = await Factory
      .model('App/Models/Warehouse')
      .create()

    var i = 0

    while (i < 20) {
      const merchant = await Factory
        .model('App/Models/Merchant')
        .create()

      const user = await Factory
        .model("App/Models/User")
        .create()

      const shelf = await Factory
        .model('App/Models/Shelf')
        .create()

      const order = await Factory
        .model('App/Models/Order')
        .make()

      await merchant.orders().save(order)

      const cargo = await Factory
        .model('App/Models/Cargo')
        .make()

      await merchant.cargoes().save(cargo)

      const ship = await Factory
        .model('App/Models/Ship')
        .create()

      const rfid = await Factory
        .model('App/Models/Rfid')
        .create()

      const finance = await Factory
        .model('App/Models/Finance')
        .create()

      i+=1
    }
  }
}

module.exports = DatabaseSeeder
