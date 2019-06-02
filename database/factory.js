'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')
const Hash = use('Hash')

const User = use('App/Model/User')
const Cargo = use('App/Model/Cargo')
const Finance = use('App/Model/Finance')
const Merchant = use('App/Model/Merchant')
const Order = use('App/Model/Order')
const Rfid = use('App/Model/Rfid')
const Shelf = use('App/Model/Shelf')
const Ship = use('App/Model/Ship')
const Token = use('App/Model/Token')
const User = use('App/Model/User')
const Warehouse = use('App/Model/Warehouse')

await Factory
  .model(User)
  .createMany(5)
await Factory
  .model(Token)
  .createMany(5)
await Factory
  .model(Rfid)
  .createMany(5)
await Factory
  .model(Merchant)
  .createMany(5)
await Factory
  .model(Warehouse)
  .createMany(5)
await Factory
  .model(Shelf)
  .createMany(5)
await Factory
  .model(Order)
  .createMany(5)
await Factory
  .model(Ship)
  .createMany(5)
await Factory
  .model(Cargo)
  .createMany(5)
await Factory
  .model(Finance)
  .createMany(5)


// Factory.blueprint('App/Models/User', async (faker) => {
//   return {
//     username: faker.username(),
//     email: faker.email(),
//     password: await Hash.make(faker.password()),
//     gender:true,
//     isdel:false,
//     level:1,
//     birth:Date()
//   }
// })
