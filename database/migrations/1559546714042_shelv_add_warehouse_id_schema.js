'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShelvAddWarehouseIdSchema extends Schema {
  up () {
    this.table('shelves', (table) => {
      // alter table
      table.integer('warehouse_id').unsigned()
      table.foreign('warehouse_id').references('warehouses.id')
    })
  }

  down () {
    this.table('shelves', (table) => {
      // reverse alternations
      table.dropForeign('warehouse_id')
      table.dropColumn('warehouse_id')
    })
  }
}

module.exports = ShelvAddWarehouseIdSchema
