'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShelfSchema extends Schema {
  up () {
    this.create('shelves', (table) => {
      table.increments()
      table.timestamps()

      //size means the cargo size it can contain
      //0. small 1. medium 2. large
      //Small for things like phones, tablets, etc
      //Medium for things like a box of foods, box of milk, drinks and etc
      //Large for things like big electronics like fridge, air conditioners, furnitures, etc
      table.integer('size').notNullable()
      table.string('alias').notNullable()
      //Capacity: the amount of cargos that can actually fill with upper size
      table.integer('capacity').notNullable()
      table.integer('existing').notNullable().defaultTo(0)
      //Fragile: 0.Normal Cargo 1. Fragile
      table.boolean('type').notNullable()
      table.integer('warehouse_id').unsigned()
      table.foreign('warehouse_id').references('warehouses.id')
    })
  }

  down () {
    this.drop('shelves')
  }
}

module.exports = ShelfSchema
