'use strict'
const Order = use('App/Models/Order')
const Merchant = use('App/Models/Merchant')
const Ship = use('App/Models/Ship')
const {validate} = use('Validator')
class OrderController {
  async index({ request, params, view }){
    const page = request.input('page')
    const perPage = 15
    const orders = await Order
      .query()
      .with('merchant')
      .where('isdel', false)
      .paginate(page, perPage)

    return view.render('order.index', {...orders.toJSON()})
  }

  async create({ request, response, view}) {
    const page = request.input('page')
    //console.log(merchant)
    const merchants = await Merchant
      .query()
      .where('isdel', false)
      .fetch()

    const merchant = merchants.toJSON()
    return view.render('order.create', {page, merchant})
  }

  async store({ request, response, session }){
    const rules = {
      type: 'required|integer|min:0|max:1',
      status: 'required|integer|min:0|max:1',
      company: 'required|min:1|max:255',
      amount: 'required|integer',
      ship_id: 'required|min:8|max:30',
      addr: 'required|min:5|max:255'
    }

    const validation = await validate(request.all(), rules)

    if(validation.fails()){
      session
        .withErrors(validation.messages())
        .flashAll()
      return response.redirect('back') 
    }

    var newOrder = request.only(['merchant_id', 'amount', 'type', 'status', 'company'])
    var newShip = request.only(['ship_id', 'addr'])
    const order = await Order.create( newOrder )
    newShip.order_id = order.id
    console.log(newShip)
    const ship = await Ship.create(newShip)
    return response.redirect('/orders')
  }

  async show ({ params, request, response, view }) {
    const id = request.input('id')
    const page = request.input('page')
    const result = {}
    result.id = id
    const order = await Order.find(id)
    const merchant = await Merchant.find(order.merchant_id)
    const ship = await Ship.findBy('order_id', id)
    result.company = order.company
    result.merchant_name = merchant.name
    result.exp = ship.ship_id
    result.barcode = merchant.barcode
    return view.render('order.detail', {order: result, page,id})
  }

  async update ({ params, request, response, session }) {
    const page = request.input('page')
    const id = request.input('id')
    const rules = {
      company: 'required|min:1|max:255',
      type:'required',
      status:'required',
      amount:'required|integer'
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()){
      session
        .withErrors(validation.messages())
        .flashAll()
      return response.redirect('back')
    }

    var newOrder = request.only([
      'company', 
      'type',
      'status',
      'amount',
    ])
    const targetOrder = await Order.find(id)
    targetOrder.merge(newOrder)
    targetOrder.save()
    return response.redirect('/orders?page='+ page)
  }

  async destroy({request, response}) {
    const id = request.input('id')
    const page = request.input('page')
    const updateIsdel = {"isdel":true}
    const delOrder = await Order.findOrFail(id)
    delOrder.merge(updateIsdel)
    delOrder.save()
    return response.redirect('/orders?page=' + page)
  }

  async edit({request, update, view}){
    const id = request.input('id')
    const page = request.input('page')
    const order = await Order.findOrFail(id)
    const merchant = await Merchant.findOrFail(order.merchant_id)
    const merchant_name = merchant.name
    console.log(order)
    return view.render('order.edit', { id, page, order, merchant_name })
  }
}

module.exports = OrderController
