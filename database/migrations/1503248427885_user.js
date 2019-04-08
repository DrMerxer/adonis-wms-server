'use strict'
const knex = require('knex')
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('userid', 40).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.datetime('birth', 6)
      table.boolean('gender').notNullable()
      table.boolean('isdel').notNullable()
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
