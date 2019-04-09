'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShelfSchema extends Schema {
  up () {
    this.create('shelves', (table) => {
      table.increments()
      table.timestamps()

      //table.integer('shelfid').notNullable().unique()
      table.integer('size').notNullable()
      table.string('merchant').notNullable()
      table.string('alias').notNullable()
      table.integer('capacity').notNullable()
    })
  }

  down () {
    this.drop('shelves')
  }
}

module.exports = ShelfSchema
