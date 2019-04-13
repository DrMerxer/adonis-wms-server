'use strict'
const knex = require('knex')
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.datetime('birth')
      table.boolean('gender').notNullable().defaultTo(true)
      table.boolean('isdel').notNullable().defaultTo(false)
      table.datetime('last_login')
      table.integer('level').notNullable()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
