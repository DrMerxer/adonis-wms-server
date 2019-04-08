'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargoSchema extends Schema {
  up () {
    this.create('cargos', (table) => {
      table.increments('cargoid')
      table.timestamps()

      //table.integer('cargoid').notNullable().unique()
      table.string('barcode', 255).notNullable()
      table.integer('size').notNullable()
      table.foreign('bindtagid',255).reference('rfid.tagid')
      table.foreign('shelfid',255).reference('shelf.shelfid')
      table.integer('status').notNullable()
      //status: 0. In Stock 1. Shipped Out 2. Returned/ForExchage
    })
  }

  down () {
    this.drop('cargos')
  }
}

module.exports = CargoSchema
