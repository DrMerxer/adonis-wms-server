'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Warehouse extends Model {
    users(){
        return this.hasMany(
            'App/Models/User'
        )
    }

    shelves(){
        return this.hasMany(
            'App/Models/Shelf'
        )
    }

    cargoes(){
      return this.manyThrough(
        'App/Models/Shelf', 'cargo'
      )
    }
}

module.exports = Warehouse
