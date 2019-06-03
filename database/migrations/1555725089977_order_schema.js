'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.timestamps()

      //type: 0.Buy-in 1.Sell-out 
      table.integer('type').notNullable()
      // table.integer('merchant_id').unsigned()
      // table.foreign('merchant_id').references('merchants.id')
      //status: 0.on-going, 1.accomplished
      table.integer('status').notNullable().unsigned()
      table.string('company').notNullable()
      table.integer('amount').notNullable().unsigned()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
