'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FinanceSchema extends Schema {
  up () {
    this.create('finances', (table) => {
      table.increments()
      table.timestamps()
      // table.integer('order_id').notNullable().unsigned()
      // table.foreign('order_id').references('orders.id')
      table.integer('money').notNullable().defaultTo(0)
    })
  }

  down () {
    this.drop('finances')
  }
}

module.exports = FinanceSchema
