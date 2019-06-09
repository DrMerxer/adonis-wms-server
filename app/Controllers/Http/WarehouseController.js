'use strict'
const Warehouse = use('App/Models/Warehouse')
const { validate } =  use('Validator')
class WarehouseController {
  async index({request, view}){
    const page = request.input('page')
    const perPage = 15
    const warehouses = await Warehouse
      .query()
      .where('isdel', false)
      .paginate(page, perPage)

    return view.render('warehouse.index', {...warehouses.toJSON()})
  }

  async create({request, view}) {
    const page = request.input('page')
    //console.log(merchant)
    return view.render('warehouse.create', page)
  }

  async store({request, response, session}) {
    const rules = {
      alias: 'required|min:1|max:255'
    }

    const validation = await validate(request.all(), rules)
    if(validation.fails()){
      session
        .withErrors(validation.messages())
        .flashAll()
      return response.redirect('back')
    }
    
    var newWarehouse = request.only(['alias'])
    const createWarehouse = await Warehouse.create(newWarehouse)
    return response.redirect('/warehouses')
  }

  async edit({request, view}){
    const id = request.input('id')
    const page = request.input('page')
    const warehouse = await Warehouse.findOrFail(id)
    return view.render('warehouse.edit', {id, page, warehouse})
  }

  async update({request, response}){
    const id = request.input('id')
    const page = request.input('page')
    const alias = request.input('alias')
    const warehouse = await Warehouse.findOrFail(id)
    warehouse.merge({"alias":alias})
    warehouse.save()
    return response.redirect('/warehouses?page=' + page)
  }

  async destroy({request, response}) {
    const id = request.input('id')
    const page = request.input('page')
    const updateIsdel = {"isdel":true}
    const delWarehouse = await Warehouse.findOrFail(id)
    delWarehouse.merge(updateIsdel)
    delWarehouse.save()
    return response.redirect('/warehouses?page=' + page)
  }
}

module.exports = WarehouseController
