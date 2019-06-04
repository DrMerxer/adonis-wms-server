'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAddWarehouseSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.integer('warehouse_id').unsigned()
      table.foreign('warehouse_id').references('warehouses.id')
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.dropForeign('warehouse_id')
      table.dropColumn('warehouse_id')
    })
  }
}

module.exports = UserAddWarehouseSchema
