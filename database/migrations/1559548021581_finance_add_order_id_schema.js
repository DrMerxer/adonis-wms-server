'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FinanceAddOrderIdSchema extends Schema {
  up () {
    this.table('finances', (table) => {
      // alter table
      table.integer('order_id').unsigned()
      table.foreign('order_id').references('orders.id')
    })
  }

  down () {
    this.table('finances', (table) => {
      // reverse alternations
      table.dropForeign('order_id')
      table.dropColumn('order_id')
    })
  }
}

module.exports = FinanceAddOrderIdSchema
