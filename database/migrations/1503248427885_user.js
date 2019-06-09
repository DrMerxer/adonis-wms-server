'use strict'
const knex = require('knex')
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 64).notNullable().unique()
      table.datetime('birth')
      table.boolean('gender').defaultTo(true)
      table.boolean('isdel').notNullable().defaultTo(false)
      table.datetime('last_login')
      table.integer('level').defaultTo(1)
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
