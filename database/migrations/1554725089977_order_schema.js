'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments('orderid')
      table.timestamps()

      //table.integer('orderid').notNullable().unique()
      //type: purchase, sell, return/change
      table.string('type').notNullable()
      table.json('detail').notNullable().defaultTo({
            'merchants' : [],
            'barcode' : [],
            'amount' : [],
            'value' : 0
      })
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
