'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShipSchema extends Schema {
  up () {
    this.create('ships', (table) => {
      table.increments()
      table.timestamps()
      table.string('ship_id').notNullable().unique() //Express order serial 
      table.string('addr').notNullable()
      // table.integer('order_id').notNullable().unsigned()
      // table.foreign('order_id').references('orders.id')
    })
  }

  down () {
    this.drop('ships')
  }
}

module.exports = ShipSchema
