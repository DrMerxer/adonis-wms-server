'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    merchant(){
        return this.belongsTo(
            'App/Models/Merchant'
        )
    }

    finance(){
        return this.hasOne(
            'App/Models/Finance'
        )
    }

    ship(){
        return this.hasOne(
            'App/Models/Ship'
        )
    }
    cargo(){
      return this.hasMany(
        'App/Models/Cargo'
      )
    }
}

module.exports = Order
