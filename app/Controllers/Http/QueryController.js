'use strict'
const Merchant = use('App/Models/Merchant')
const Shelf = use('App/Models/Shelf')
const Order = use('App/Models/Order')
const Warehouse = use('App/Models/Warehouse')
class QueryController {
  async index({view}){
    return view.render('query.index')
  }

  async search({request, view}){
    const type = request.input('type')
    const content = request.input('search_text')
    var result = undefined
    var iter = 0

    switch (type) {
      case 'shelf':
        const shelf = await Shelf
          .findBy('alias', content)
        result = await shelf.cargo().fetch()
        break;
      case 'order':
        const order = await Order
          .findBy('id', content)
        result = await order.cargo().fetch()
        break;
      case 'warehouse':
        const warehouse = await Warehouse
          .findBy('alias', content)
        result = await warehouse.cargoes().fetch() 
        break;
      case 'merchant':
        const merchant = await Merchant.findBy('name', content)
        result = await merchant.cargo().fetch()
        break;
    }
    const result_obj = result.toJSON()
    return view.render('query.search_result', {result_obj})
  }
}

module.exports = QueryController
