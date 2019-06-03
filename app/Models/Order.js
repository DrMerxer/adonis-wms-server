'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    merchant(){
        return this.belongsTo(
            'App/Models/Merchant'
        )
    }

    merchant_name(){
        return this.belongsTo(
            'App/Models/Merchant',
            'name',
            'id'
        )
    }

    finance(){
        return this.hasOne(
            'App/Models/Finance'
        )
    }

    ship(){
        return this.hasOne(
            'App/Model/Ship'
        )
    }
}

module.exports = Order
