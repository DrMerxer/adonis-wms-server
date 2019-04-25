'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MerchantSchema extends Schema {
  up () {
    this.create('merchants', (table) => {
      table.increments()
      table.timestamps()

      table.string('name').notNullable()
      table.integer('order_id').notNullable().unsigned()
      table.foreign('order_id').references('orders.id')
      table.string('attr')
      table.string('barcode').unique()
      table.integer('price')
      table.integer('amount')
    })
  }

  down () {
    this.drop('merchants')
  }
}

module.exports = MerchantSchema
