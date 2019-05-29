'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const User = use('App/Models/User')
const Ship = use('App/Models/Ship')
class Cargo extends Model {
  order(ship_id){
    const order = await Ship.findBy('ship_id', ship_id)
    console.log(order)
    const orderSrlz = order.toJSON()
    return orderSrlz.order_id
  }
}


module.exports = Cargo
