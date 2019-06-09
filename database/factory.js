'use strict'
const fakerjs = require('faker')
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

const User = use('App/Models/User')
const Cargo = use('App/Models/Cargo')
const Merchant = use('App/Models/Merchant')
const Order = use('App/Models/Order')
const Rfid = use('App/Models/Rfid')
const Shelf = use('App/Models/Shelf')
const Ship = use('App/Models/Ship')
const Token = use('App/Models/Token')
const Warehouse = use('App/Models/Warehouse')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    password: await Hash.make(faker.password()),
    email: faker.email(),
    birth: faker.date(),
    gender: faker.bool(),
    isdel: faker.bool(),
    last_login: new Date(),
    level: faker.integer({min:1,max:3}),
  }
})

Factory.blueprint('App/Models/Rfid', async (faker) => {
  return {
    tagid: faker.string({pool:'1234567890ABCDEF', length:8}),
    status: faker.integer({min:0, max:1})
  }
})

Factory.blueprint('App/Models/Merchant', async (faker) => {
  return {
    name: fakerjs.commerce.productName(),
    attr: faker.sentence(),
    fragile: faker.bool(),
    size: faker.integer({min:0, max:2}),
    barcode: faker.string({pool:"1234567890", length:13}),
    price: faker.integer({min:10, max:100}),
    cost: faker.integer({min:5, max:20}),
    amount: faker.integer({min:1, max:64}),
    arrived: 0,
    checked: 0,
    departured: 0,
    isdel: false
  }
})

Factory.blueprint('App/Models/Warehouse', async (faker) => {
  return {
    alias: faker.word(),
  }
})
Factory.blueprint('App/Models/Shelf', async (faker) => {
  return {
    size: faker.integer({min:0, max:2}),
    alias: faker.string({
      pool:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      length:4
    }),
    capacity: faker.integer({min:1, max:4})*10,
    existing: 0,
    type: faker.bool({likelihood:30}),
    
  }
})
Factory.blueprint('App/Models/Order', async (faker) => {
  return {
    type: faker.integer({min:0, max:1}),
    status: faker.integer({min:0, max:1}),
    company: fakerjs.company.companyName(),
    amount: faker.integer({min:10, max:80}),
  }
})
Factory.blueprint('App/Models/Ship', async (faker) => {
  return {
    ship_id: faker.string({
      pool:'1234567890',
      length:'12'
    }),
    addr: fakerjs.address.state() + " " + fakerjs.address.city() + " " + fakerjs.address.streetName() + " " + fakerjs.address.secondaryAddress()
  }
})
Factory.blueprint('App/Models/Cargo', async (faker) => {
  return {
    ischecked: faker.bool({ likelihood:80 }),
    isdel: false
  }
})

// async function makebrew() {
//   try {
//     await Factory
//       .model(User)
//       .createMany(5)
//     await Factory
//       .model(Token)
//       .createMany(5)
//     await Factory
//       .model(Rfid)
//       .createMany(5)
//     await Factory
//       .model(Merchant)
//       .createMany(5)
//     await Factory
//       .model(Warehouse)
//       .createMany(5)
//     await Factory
//       .model(Shelf)
//       .createMany(5)
//     await Factory
//       .model(Order)
//       .createMany(5)
//     await Factory
//       .model(Ship)
//       .createMany(5)
//     await Factory
//       .model(Cargo)
//       .createMany(5)
//     await Factory
//       .model(Finance)
//       .createMany(5)
//   } catch (error) {
//     console.log(error)
//   }
// }

// makebrew()
