'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShipSchema extends Schema {
  up () {
    this.create('ships', (table) => {
      table.increments()
      table.timestamps()
      table.string('action').notNullable()
      table.integer('type')
      // Type: 0. Buy-in 1. Normal shipping 2. Return/Exchange
      table.json('detail')
      table.string('expressid')
      table.string('addr')
    })
  }

  down () {
    this.drop('ships')
  }
}

module.exports = ShipSchema
