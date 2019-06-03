'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargoAddReferencesSchema extends Schema {
  up () {
    this.table('cargo_add_references', (table) => {
      // alter table
      table.string('barcode').notNullable().unique()
      table.foreign('barcode').references('merchants.barcode')
      table.integer('shelf_id').unsigned().notNullable()
      table.foreign('shelf_id').references('shelves.id')
      table.integer('order_id').unsigned().notNullable()
      table.foreign('order_id').references('orders.id')
      table.integer('tag_id').unsigned().notNullable()
      table.foreign('tag_id').references('rfids.id')
    })
  }

  down () {
    this.table('cargo_add_references', (table) => {
      // reverse alternations
      table.dropForeign('barcode')
      table.dropForeign('shelf_id')
      table.dropForeign('order_id')
      table.dropForeign('tag_id')
      table.dropColumn('barcode')
      table.dropColumn('shelf_id')
      table.dropColumn('order_id')
      table.dropColumn('tag_id')
    })
  }
}

module.exports = CargoAddReferencesSchema
