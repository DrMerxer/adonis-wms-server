'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rfid extends Model {
    Cargo(){
        return this.hasOne('App/Models/Cargo')
    }

    static get primaryKey(){
        return 'id'
    }
}

module.exports = Rfid
