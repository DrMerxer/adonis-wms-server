'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Shelf extends Model {
  //find the 
  arrive(size, type){
    const targetShelf = await Shelf
      .query()
      .where('size', '=', size)
      .where('type', '=', type)
      .where('existing','<','capacity')
      .fetch()

    const targetShelfJSON = targetShelf.toJSON()
    console.log(targetShelfJSON)

    const targetShelfId = targetShelfJSON[0].id
    const targetShelfExisting = targetShelfJSON[0].exisiting
    const updateShelfExisiting = Shelf
      .where('id',targetShelfId)
      .update({ exisiting:  targetShelfExisting + 1})

    console.log(updateShelfExisiting.toJSON())

    return targetShelfId
  }

}

module.exports = Shelf
