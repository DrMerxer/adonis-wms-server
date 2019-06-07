'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rfid extends Model {
    cargo(){
        return this.hasOne('App/Models/Cargo')
    }
}

module.exports = Rfid
