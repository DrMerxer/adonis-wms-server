'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Finance extends Model {
    orders(){
        return this.belongsTo(
            'App/Models/Order'
        )
    }
}

module.exports = Finance
