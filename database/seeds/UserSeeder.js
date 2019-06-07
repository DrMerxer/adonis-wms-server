'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')
class UserSeeder {
  async run() {
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
    User.createMany(users)
  }
}

module.exports = UserSeeder
