'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShelfSchema extends Schema {
  up () {
    this.create('shelves', (table) => {
      table.increments()
      table.timestamps()

      //size means the cargo size it can contain
      table.integer('size').notNullable()
      table.string('alias').notNullable()
      table.integer('capacity').notNullable()
      //Type: 0.Normal Cargo 1. Fragile
      table.integer('type').notNullable()
      table.integer('warehouseid').unsigned()
      table.foreign('warehouseid').references('warehouses.id')
    })
  }

  down () {
    this.drop('shelves')
  }
}

module.exports = ShelfSchema
