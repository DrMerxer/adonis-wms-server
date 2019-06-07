'use strict'
const Merchant = use('App/Models/Order')
const {validate} = use('Validator')
class OrderController {
  async index({ view }){
    const page = request.input('page')
    const perPage = 15
    const orders = await Order
      .query()
      .where('isdel', false)
      .paginate(page, perPage)

    return view.render('order.index', {...orders.toJSON()})
  }
}

module.exports = OrderController
