'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RfidSchema extends Schema {
  up () {
    this.create('rfids', (table) => {
      table.increments()
      table.timestamps()

      //table.integer('tagid',255).notNullable().unique()
      table.string('tagid',8).notNullable().unique()
      table.integer('status').notNullable().defaultTo(0)
    })
  }

  down () {
    this.drop('rfids')
  }
}

module.exports = RfidSchema
