'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FinanceSchema extends Schema {
  up () {
    this.create('finances', (table) => {
      table.increments()
      table.timestamps()
      table.string('title').notNullable().unique()
      table.Integer('balance').notNullable().defaultTo(0)
    })
  }

  down () {
    this.drop('finances')
  }
}

module.exports = FinanceSchema
