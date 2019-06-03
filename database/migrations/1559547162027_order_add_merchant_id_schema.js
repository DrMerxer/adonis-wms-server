'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderAddMerchantIdSchema extends Schema {
  up () {
    this.table('orders', (table) => {
      // alter table
      table.integer('merchant_id').unsigned()
      table.integer('merchant_id').references('merchants.id')
    })
  }

  down () {
    this.table('orders', (table) => {
      // reverse alternations
      table.dropForeign('merchant_id')
      table.dropColumn('merchant_id')
    })
  }
}

module.exports = OrderAddMerchantIdSchema
