'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RfidSchema extends Schema {
  up () {
    this.create('rfids', (table) => {
      table.increments()
      table.timestamps()

      table.string('tagid').notNullable().unique()
      //status: 0. normal 1.broken
      table.integer('status').notNullable().defaultTo(0)
    })
  }

  down () {
    this.drop('rfids')
  }
}

module.exports = RfidSchema
