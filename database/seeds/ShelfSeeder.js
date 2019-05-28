'use strict'

/*
|--------------------------------------------------------------------------
| ShelfSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Shelf = use('App/Models/Shelf')
class ShelfSeeder {
  async run() {
    const shelves = [
    {
      "size": 0,
      "alias": "S1-1",
      "capacity":20,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "S1-2",
      "capacity":20,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "S1-3",
      "capacity":20,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "S1-4",
      "capacity":20,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "S1-5",
      "capacity":20,
      "type":1,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "S2-1",
      "capacity":20,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "S2-2",
      "capacity":20,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "S2-3",
      "capacity":20,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "S2-4",
      "capacity":20,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "S2-5",
      "capacity":20,
      "type":1,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "M1-1",
      "capacity":10,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 1,
      "alias": "M1-2",
      "capacity":10,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 1,
      "alias": "M1-3",
      "capacity":10,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 1,
      "alias": "M1-4",
      "capacity":10,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 1,
      "alias": "M1-5",
      "capacity":10,
      "type":1,
      "warehouse_id":1
    },
    {
      "size": 1,
      "alias": "M2-1",
      "capacity":10,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 1,
      "alias": "M2-2",
      "capacity":10,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 1,
      "alias": "M2-3",
      "capacity":10,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 1,
      "alias": "M2-4",
      "capacity":10,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 1,
      "alias": "M2-5",
      "capacity":10,
      "type":1,
      "warehouse_id":1
    },
    {
      "size": 2,
      "alias": "L1-1",
      "capacity":5,
      "type":1,
      "warehouse_id":1
    },
    {
      "size": 2,
      "alias": "L1-2",
      "capacity":5,
      "type":1,
      "warehouse_id":1
    },
    {
      "size": 2,
      "alias": "L1-3",
      "capacity":5,
      "type":1,
      "warehouse_id":1
    },
    {
      "size": 2,
      "alias": "L1-4",
      "capacity":5,
      "type":1,
      "warehouse_id":1
    },
    {
      "size": 2,
      "alias": "L1-5",
      "capacity":5,
      "type":1,
      "warehouse_id":1
    },
    {
      "size": 2,
      "alias": "L2-1",
      "capacity":7,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 2,
      "alias": "L2-2",
      "capacity":7,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 2,
      "alias": "L2-3",
      "capacity":7,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 2,
      "alias": "L2-4",
      "capacity":7,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 2,
      "alias": "L2-5",
      "capacity":7,
      "type":0,
      "warehouse_id":1
    },
    {
      "size": 0,
      "alias": "S3-1",
      "capacity":0,
      "type":0,
      "warehouse_id":1
    },
  ]

    Shelf.createMany(shelves)

  }
}

module.exports = ShelfSeeder
