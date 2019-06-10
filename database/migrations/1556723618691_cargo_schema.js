'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargoSchema extends Schema {
  up () {
    this.create('cargos', (table) => {
      table.increments()
      table.timestamps()

      table.boolean('ischecked').notNullable().defaultTo(0)
      // table.integer('shelf_id').unsigned().notNullable()
      // table.foreign('shelf_id').references('shelves.id')
      table.boolean('isdel').notNullable().defaultTo(0) //status: 0. Down 1. Up
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
