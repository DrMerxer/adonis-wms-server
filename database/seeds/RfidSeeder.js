'use strict'

/*
|--------------------------------------------------------------------------
| RfidSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const RFID = use('App/Models/Rfid')
class RfidSeeder {
  async run () {
    const rfids = [
      {
        "tagid":"04596F0E",
        "status":0
      },
      {
        "tagid":"EA8FA218",
        "status":0
      }
    ]

    RFID.createMany(rfids)
  }
}

module.exports = RfidSeeder
