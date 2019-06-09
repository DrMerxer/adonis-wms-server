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
  async arrive({
    request,
    response,
    params
  }) {
    const tagid = request.input('tagid')
    const shipid = request.input('shipid')
    const barcode = request.input('barcode')
    try {
      const ship = await Ship.findByOrFail('ship_id', shipid)
      const rfid = await RFID.findByOrFail('tagid', tagid)
      const order = await Order.findByOrFail('id', ship.order_id)
      const merchant = await Merchant.findByOrFail('id', order.merchant_id)

      //MagicBarcode
      switch (barcode) {
        case 'addRFIDTag':
          const addRFIDTag = await RFID.create({
            'tagid': tagid,
            status: 0
          })
          return {
            "result": "RFID added! " + tagid
          }
          break;
        default:
          const new_cargo = {
            ischeck: false,
            order_id: order.id,
            rfid_id: rfid.id,
          }
          //Examine arrival status
          const arrive_order = (await Order.query().where('id', order.id).withCount('cargo').fetch()).toJSON()
          const cargo_amount = arrive_order[0].__meta__.cargo_count
          const ideal_shelf = (await Shelf.query().where('size', merchant.size).where('capacity', '>', 'existing').fetch()).toJSON()
          console.log(ideal_shelf)
          if (cargo_amount < order.amount) {
            new_cargo.shelf_id = ideal_shelf.id
            const cargo = await Cargo.create(new_cargo)
          } else {
            return {
              "result": "Order full!"
            }
          }
          //Check order completion status
          return {
            "result": "Cargo added! "
          }
          break;
      }
    } catch (error) {
      console.log(error)
      return {
        "result": "No match records."
      }
    }
  }

  async check({ request, response }){
    const tagid = request.input('tagid')
    try{
      const rfid = await RFID.findByOrFail('tagid', tagid)
      const cargo = await Cargo.findByOrFail('rfid_id', rfid.id)
      const order = await Order.findByOrFail('id', cargo.order_id)
      const merchant = await Merchant.findByOrFail('id', order.id)
      if(cargo.ischecked){
        return {"result":"Cargo checked!"}
      }else{
        cargo.merge({"ischecked": 1})
        cargo.save()

        //Check order status
        const checked = await order.cargo().count()
        const amount = JSON.parse(JSON.stringify(checked))[0]['count(*)']
        const order_amount = order.amount
        if(checked == amount){
          order.merge({"status":1})
          order.save()
        }
        return {"result":"Check : " + merchant.name}
      }
    }catch(error){
      console.log(error)
      return {"result":error}
    }
  }

  async departure({request, response}){

  }
}


module.exports = GunController
