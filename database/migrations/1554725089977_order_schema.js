'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.timestamps()

      //table.integer('orderid').notNullable().unique()
      //type: purchase, sell, return/change
      table.string('type').notNullable()
      table.json('detail').notNullable()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
