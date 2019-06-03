'use strict'

/*
|--------------------------------------------------------------------------
| CargoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CargoSeeder {
  async run () {
    const cargos = await Factory
      .model('App/Models/Cargo')
      .createMany(246)
    const merchants = await Factory
      .model('App/Models/Merchant')
      .makeMany()
    const shelvs = await Factory
      .model('App/Models/Shelf')
      .makeMany()
    const orders = await Factory
      .model('App/Models/Order')
      .makeMany()
    const rifds = await Factory
      .model('App/Models/Rfid')
      .makeMany()
    cargos.save()
  }
}

module.exports = CargoSeeder
