'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargoAddReferencesSchema extends Schema {
  up () {
    this.table('cargos', (table) => {
      // alter table
      table.integer('merchant_id').unsigned()
      table.foreign('merchant_id').references('merchants.id')
      table.integer('shelf_id').unsigned()
      table.foreign('shelf_id').references('shelves.id')
      table.integer('order_id').unsigned()
      table.foreign('order_id').references('orders.id')
      table.integer('tag_id').unsigned()
      table.foreign('tag_id').references('rfids.id')
    })
  }

  down () {
    this.table('cargos', (table) => {
      // reverse alternations
      table.dropForeign('merchant_id')
      table.dropForeign('shelf_id')
      table.dropForeign('order_id')
      table.dropForeign('tag_id')
      table.dropColumn('merchant_id')
      table.dropColumn('shelf_id')
      table.dropColumn('order_id')
      table.dropColumn('tag_id')
    })
  }
}

module.exports = CargoAddReferencesSchema
