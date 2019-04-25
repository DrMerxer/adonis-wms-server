'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WarehouseSchema extends Schema {
  up () {
    this.create('warehouses', (table) => {
      table.increments()
      table.timestamps()

      table.string('alias')
    })
  }

  down () {
    this.drop('warehouses')
  }
}

module.exports = WarehouseSchema
