'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargoAddReferencesSchema extends Schema {
  up () {
    this.table('cargos', (table) => {
      // alter table
      table.integer('shelf_id').unsigned()
      table.foreign('shelf_id').references('shelves.id')
      table.integer('order_id').unsigned()
      table.foreign('order_id').references('orders.id')
      table.integer('rfid_id').unsigned()
      table.foreign('rfid_id').references('rfids.id')
    })
  }

  down () {
    this.table('cargos', (table) => {
      // reverse alternations
      table.dropForeign('shelf_id')
      table.dropForeign('order_id')
      table.dropForeign('rfid_id')
      table.dropColumn('shelf_id')
      table.dropColumn('order_id')
      table.dropColumn('rfid_id')
    })
  }
}

module.exports = CargoAddReferencesSchema
