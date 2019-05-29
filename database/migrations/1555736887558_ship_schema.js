'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShipSchema extends Schema {
  up () {
    this.create('ships', (table) => {
      table.increments()
      table.timestamps()
      table.string('ship_id').notNullable().unique()
      table.integer('type').notNullable()
      // Type: 0. Arrival 1. Departure 2. Return/Exchange
      table.string('addr').notNullable()
      table.integer('order_id').notNullable().unsigned()
      table.foreign('order_id').references('orders.id')
    })
  }

  down () {
    this.drop('ships')
  }
}

module.exports = ShipSchema
