'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShipAddReferencesSchema extends Schema {
  up () {
    this.table('ships', (table) => {
      // alter table
      table.integer('order_id').notNullable().unsigned()
      table.foreign('order_id').references('orders.id')
    })
  }

  down () {
    this.table('ships', (table) => {
      // reverse alternations
      table.dropForeign('order_id')
      table.dropColumn('order_id')
    })
  }
}

module.exports = ShipAddReferencesSchema
