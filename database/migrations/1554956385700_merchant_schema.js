'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MerchantSchema extends Schema {
  up () {
    this.create('merchants', (table) => {
      table.increments()
      table.timestamps()

      table.string('name').notNullable().unique()
      table.string('attr')
      //Size 0.small 1.medium 2.large
      table.boolean('fragile').notNullable().defaultTo(false)
      table.integer('size')
      table.string('barcode').unique()
      table.integer('price').notNullable()
      table.integer('cost').notNullable()
      table.integer('amount')
      table.integer('arrived')
      table.integer('checked')
      table.integer('departured')
    })
  }

  down () {
    this.drop('merchants')
  }
}

module.exports = MerchantSchema
