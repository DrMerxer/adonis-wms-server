'use strict'
const Order = use('App/Models/Order')
const Merchant = use('App/Models/Merchant')
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
    const merchants = await Merchant
      .query()
      .where('isdel', false)
      .fetch()
    const merchant = merchants.toJSON()
    const page = request.input('id')
    //console.log(merchant)
    return view.render('order.create', {merchant, page})
  }

  async store({ request, response, session }){
    const rules = {
      type: 'required|integer|min:0|max:1',
      status: 'required|integer|min:0|max:1',
      company: 'required|min:1|max:255',
      amount: 'required|integer'
    }

    const validation = await validate(request.all(), rules)

    if(validation.fails()){
      session
        .withErrors(validation.messages())
        .flashAll()
      return response.redirect('back') 
    }

    var newOrder = request.only(['merchant_id', 'amount', 'type', 'status', 'company'])
    console.log(newOrder)
    const order = await Order.create( newOrder )

    return response.redirect('/orders')
  }

  async show ({ params, request, response, view }) {
    
  }

  async update ({ params, request, response }) {
    const {id, page} = request.input('id', 'page')
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

    var newMerchant = request.only([
      'company', 
      'type',
      'status',
      'amount'
    ])
  }

  async destroy({request, response}) {
    const id = request.input('id')
    const page = request.input('page')
    const updateIsdel = {"isdel":id}
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
