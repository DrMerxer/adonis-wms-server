'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShipAddReferencesSchema extends Schema {
  up () {
    this.table('ship_add_references', (table) => {
      // alter table
    })
  }

  down () {
    this.table('ship_add_references', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ShipAddReferencesSchema
