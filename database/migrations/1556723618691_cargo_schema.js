'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargoSchema extends Schema {
  up () {
    this.create('cargos', (table) => {
      table.increments()
      table.timestamps()

      table.integer('cargoid').notNullable().unique()
      // table.string('barcode').notNullable().unique()
      // table.foreign('barcode').references('merchants.barcode')
      table.boolean('ischecked')
      // table.integer('shelf_id').unsigned().notNullable()
      // table.foreign('shelf_id').references('shelves.id')
      table.integer('isdel').notNullable() //status: 0. Down 1. Up
      // table.integer('order_id').unsigned().notNullable()
      // table.foreign('order_id').references('orders.id')
      // table.integer('tag_id').unsigned().notNullable()
      // table.foreign('tag_id').references('rfids.id')
    })
  }

  down () {
    this.drop('cargos')
  }
}

module.exports = CargoSchema
