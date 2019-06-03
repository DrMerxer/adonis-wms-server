'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FinanceAddOrderIdSchema extends Schema {
  up () {
    this.table('finance_add_order_ids', (table) => {
      // alter table
      table.integer('order_id').notNullable().unsigned()
      table.foreign('order_id').references('orders.id')
    })
  }

  down () {
    this.table('finance_add_order_ids', (table) => {
      // reverse alternations
      table.dropForeign('order_id')
      table.dropColumn('order_id')
    })
  }
}

module.exports = FinanceAddOrderIdSchema
