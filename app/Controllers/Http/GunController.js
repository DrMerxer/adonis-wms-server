'use strict'
const Database = use('Database')
const User = use('App/Models/User')
const Cargo = use('App/Models/Cargo')
const Ship = use('App/Models/Ship')
const Shelf = use('App/Models/Shelf')
const Merchant = use('App/Models/Merchant')
const RFID = use('App/Models/Rfid')
const Order = use('App/Models/Order')
class GunController {
  async arrive({ request, response }) {
    const tagid = request.input('tagid')
    const barcode = request.input('barcode')
    const shipid = request.input('shipid')
    const ship = await Ship.findByOrFail('ship_id', shipid)
    const rfid = await RFID.findByOrFail('tagid', tagid)
    //MagicBarcode
    switch (barcode) {
      case 'addRFIDTag':
        const addRFIDTag = await RFID.create({
          'tagid':tagid,
          status:0
        })
        return {"result":"RFID added! " + tagid}
        break;
      default:
        const Order = await ship.order().select('id', 'merchant_id').fetch()
        const merchant = await Merchant.findOrFail(order.merchant_id)
        const size = merchant.size
        const shelf = await Shelf
          .query()
          .where('exisiting','<','capacity')
          .where('size', size)
          .first()
        const Cargo = await Cargo.create({
          'ischecked':0,
          'shelf_id':shelf.id,
          'order_id':order.id,
          'rfid_id':rfid.id
        })
        return {"result":"Cargo added! " + merchant.name}
        break;
    }

  }
}


module.exports = GunController
