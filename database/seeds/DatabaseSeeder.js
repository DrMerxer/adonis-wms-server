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
const Merchant = use('App/Models/Merchant')
const Order = use('App/Models/Order')
const Ship = use('App/Models/Ship')
const User = use('App/Models/User')
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

      const order = await Factory
        .model('App/Models/Order')
        .make()

      await merchant.orders().save(order)

      const user = await Factory
        .model("App/Models/User")
        .make()
      await warehouse.users().save(user)
      const shelf = await Factory
        .model('App/Models/Shelf')
        .make()

      await warehouse.shelves().save(shelf)
      
      const cargo = await Factory
        .model('App/Models/Cargo')
        .make()

      await shelf.cargo().save(cargo)

      const ship = await Factory
        .model('App/Models/Ship')
        .make()

      await order.ship().save(ship)
      await order.cargo().save(cargo)

      const rfid = await Factory
        .model('App/Models/Rfid')
        .create()

      await rfid.cargo().save(cargo)

      const finance = await Factory
        .model('App/Models/Finance')
        .make()

      await order.finance().save(finance)

      i+=1
    }

    const users = [{
      "username": "abnernat",
      "email": "zhang951005@gmail.com",
      "birth": "1995-10-05 00:00:00",
      "gender": 1,
      "isdel": 0,
      "last_login": "2019-6-4 12:34:54",
      "level": 3,
      "password": "Docrid1cul0us",
      "warehouse_id": 1
    }]
    await User.createMany(users)
    
  }
}

module.exports = DatabaseSeeder
