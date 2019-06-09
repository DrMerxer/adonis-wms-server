'use strict'
const Warehouse = use('App/Models/Warehouse')
const Shelf = use('App/Models/Shelf')
const Cargo = use('App/Models/Cargo')
const Database = use('Database')
const Merchant = use('App/Models/Merchant')
const { validate } = use('Validator')
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
    return view.render('shelf.detail', {...cargo.toJSON(), id})
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
    const warehouses = await Warehouse.all()
    const warehouse = warehouses.toJSON()
    return view.render('shelf.create', {page, warehouse})
  }

  async store({request, session, response}){
    const rules = {
      alias:"required|min:1|max:255",
      size:"required",
      warehouse_id:"required"
    }

    const validation = await validate(request.all(), rules)

    if(validation.fails()){
      session
        .withErrors(validation.messages())
        .flashAll()
        return response.redirect('back')
    }
    const shelf = request.only(['alias', 'size', 'type', 'capacity','warehouse_id'])
    const store = await Shelf.create(shelf)
    
    const page = request.input('page')
    return response.redirect('/shelves?page=' + page)
  }

  async edit_alias({request, response, view}){
    const page = request.input('page')
    const id = request.input('id')
    const shelf = await Shelf.findOrFail(id)
    const shelf_obj = shelf.toJSON()
    const old_alias = shelf_obj.alias
    console.log(old_alias)
    return view.render('shelf.edit', {page, id, old_alias})
  }

  async update({request, response}){
    const page = request.input('page')
    const id = request.input('id')
    const alias = request.input('alias')

    const shelf = await Shelf.findOrFail(id)
    shelf.merge({"alias":alias})
    shelf.save()
    return response.redirect('/shelves?page=' + page)
  }
}

module.exports = ShelfController
