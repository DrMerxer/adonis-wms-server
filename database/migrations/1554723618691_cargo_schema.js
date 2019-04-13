'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargoSchema extends Schema {
  up () {
    this.create('cargos', (table) => {
      table.increments()
      table.timestamps()

      //table.integer('cargoid').notNullable().unique()
      table.string('barcode').notNullable()
      table.foreign('barcode').references('merchants.barcode')
      table.integer('size').notNullable()
      // table.foreign(['tagid','shelfid'])
      //    .references(['id','id'])
      //    .on(['rfids','shelves'])
      table.integer('shelf_id').unsigned()
      table.foreign('shelf_id').references('shelves.id')
      table.integer('status').notNullable() //status: 0. In Stock 1. Shipped Out 2. Returned/ForExchage
      table.integer('order_id').unsigned()
      table.foreign('order_id').references('orders.id')
      table.integer('ship_id').unsigned()
      table.foreign('ship_id').references('ships.id')
      
    })
  }

  down () {
    this.drop('cargos')
  }
}

module.exports = CargoSchema
