'use strict'
const Warehouse = use('App/Models/Warehouse')
const Shelf = use('App/Models/Shelf')
const Cargo = use('App/Models/Cargo')
const Database = use('Database')
const Merchant = use('App/Models/Merchant')
class ShelfController {
  async index({request, view}){
    const page = request.input('page')
    const perPage = 15
    const shelves = await Shelf 
      .query()
      .where('isdel', false)
      .paginate(page, perPage)
    return view.render('shelf.index', {...shelves.toJSON()})
  }

  async detail({request, view}) {
    const id = request.input('id')
    const page = request.input('page')
    const perPage = 15
    const cargo = await Cargo
      .query()
      .where('shelf_id', id)
      .where('isdel', false)
      .paginate(page, perPage)
    return view.render('shelf.detail', {...cargo.toJSON()})
  }

  async destroy({request, response}){
    const id = request.input('id')
    const page = request.input('page')
    const shelf = await Shelf.findOrFail(id)
    if(shelf.existing > 0){
      return response.redirect('/shelves/move?id=' + id)
    }else{
      const drop_shelf = await Shelf.findOrFail(id)
      drop_shelf.merge({isdel:true})
      drop_shelf.save()
      return response.redirect('/shelves?page=' + page)
    }
  }

  async move({request, response, view}){
    const id = request.input('id')
    const stock = await Shelf.findOrFail(id)
    const suitable_selection = await Shelf.query().where('size', stock.size).fetch()
    const suitable_obj = suitable_selection.toJSON()
    var disable = false
    var selection = []
    for(var obj of suitable_obj){
      if((obj.capacity - obj.existing) > stock.existing){
        obj.empty = obj.capacity - obj.existing
        selection.push(obj)
      }
    }
    if(!selection){
      disable = true
    }
    return view.render('shelf.not_empty_shelf', {stock, selection, disable})
  }

  async move_cargo({request, response}){
    const old = request.input('original_shelf')
    const target = request.input('taget_shelf')
    const move = await Cargo.findByOrFail('shelf_id',old)
    move.merge({'shelf_id': target})
    move.save()
    const amount = await Shelf.find(old)
    const camount =  amount.cargo().count()
    console.log(old)
    return response.redirect('/shelves')
  }

  async refresh({response}){
    const all = await Shelf.all()
    const all_object = all.toJSON()
    for(var shelf of all_object){
      const existing = await Shelf
        .query()
        .where('id', shelf.id)
        .withCount('cargo').fetch()
      const existing_obj = existing.toJSON()
      const update_exist = await Shelf.find(shelf.id)
      update_exist.merge({"existing":existing_obj[0].__meta__.cargo_count})
      update_exist.save()
    }
    return response.redirect('/shelves')
  }

  

  async create({request, response, view}){
    const page = request.input('page')
    
  }

  async store({request, session, response}){

  }
}

module.exports = ShelfController
