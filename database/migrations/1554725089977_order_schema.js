'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.timestamps()

      //status: arriving, in-stock, out-of-stock
      table.integer('status').notNullable()
      table.string('company').notNullable()

    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
