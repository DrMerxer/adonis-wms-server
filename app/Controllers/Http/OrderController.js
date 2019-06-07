'use strict'

class OrderController {
  async index({ view }){
    return view.render('order.index')
  }
}

module.exports = OrderController
