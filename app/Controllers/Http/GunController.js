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
    console.log(barcode)
    console.log(tagid)
    console.log(shipid)


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
        //break;
      default:
        try {
          const ship = await Ship.findByOrFail('ship_id', shipid)
          const rfid = await RFID.findByOrFail('tagid', tagid)
          const order = await Order.findByOrFail('id', ship.order_id)
          const merchant = await Merchant.findByOrFail('id', order.merchant_id)
          if(barcode != merchant.barcode) return {"result":"Wrong merchant."}
          const new_cargo = {
            ischecked: false,
            order_id: order.id,
            rfid_id: rfid.id,
          }
          //Examine arrival status
          const arrive_order = (await Order.query().where('id', order.id).where('isdel', false).where('type', 0).withCount('cargo', (builder) => {
            builder.where('isdel', false)
          }).fetch()).toJSON()
          const cargo_amount = arrive_order[0].__meta__.cargo_count
          const ideal_shelf = (await Shelf.query().where('size', merchant.size).where('isdel', false).where('capacity', '>', 'existing').first()).toJSON()
          console.log(ideal_shelf)
          if (cargo_amount < order.amount) {
            new_cargo.shelf_id = ideal_shelf.id
            const target_shelf = await Shelf.find(ideal_shelf.id)
            //Maintaing the stock detail of the shelf
            target_shelf.merge({"existing":target_shelf.existing + 1})
            target_shelf.save()
            const cargo = await Cargo.create(new_cargo)
            return {"result": "Cargo added at Shelf "+ target_shelf.alias +"! "}
          } else {
            return {
              "result": "Order full!"
            }
          }
        } catch (error) {
          console.log(error)
          return {
            "result": "No match records."
          }
        }
    }
    //break;
  }


  async check({
    request,
    response
  }) {
    const tagid = request.input('tagid')
    try {
      const rfid = await RFID.findByOrFail('tagid', tagid)
      const cargo = await Cargo.findByOrFail('rfid_id', rfid.id)
      const order = await Order.findByOrFail('id', cargo.order_id)
      const merchant = await Merchant.findByOrFail('id', order.id)
      if (cargo.ischecked) {
        return {
          "result": "Cargo checked!"
        }
      } else {
        cargo.merge({
          "ischecked": 1
        })
        cargo.save()

        //Check order status
        const checked = await order.cargo().where('isdel', 0).count()
        const amount = JSON.parse(JSON.stringify(checked))[0]['count(*)']
        const order_amount = order.amount
        if (checked == amount) {
          order.merge({
            "status": 1
          })
          order.save()
        }
        return {
          "result": "Check : " + merchant.name
        }
      }
    } catch (error) {
      console.log(error)
      return {
        "result": error
      }
    }
  }

  async departure({
    request,
    response
  }) {
    const tagid = request.input('tagid')
    const order_id = request.input('order_id')
    const cargo = await Cargo.findByOrFail('rfid_id', tagid)
    const order = await Order.findOrFail(order_id)
    const merchant = await Merchant.findByOrFail('id', order.merchant_id)
    var amount = 0
    //Calculoate merchant's total number
    const orders = (await merchant.orders().where('isdel', false).where('status', 0).where('type', 1).fetch()).toJSON()
    for (var obj of orders) {
      const single_amount = JSON.parse(JSON.stringify(await Cargo.query().where('order_id', obj.id).count()))[0]['count(*)']
      console.log(single_amount)
      amount += single_amount
    }
    if (amount > 0) {
      //When order existing less then order target amount
      if (JSON.parse(JSON.stringify(await order.cargo().where('isdel', false).count()))[0]['count(*)'] < order.amount) {
        //Detach data relationships
        await cargo.rfid().detach()
        await cargo.order().detach()
        await cargo.order().attach([order.id])
        const target_shelf = await shelf.find(cargo.shelf_Id)
        //Maintaing the stock detail of the shelf
        target_shelf.merge({"existing":target_shelf.existing - 1})
        //If the item is the last item in order, flag order as complete.
        if (JSON.parse(JSON.stringify(await order.cargo().where('isdel', false).count()))[0]['count(*)'] == (order.amount - 1)) {
          order.merge({
            'status': 1
          })
          order.save()
        }
        return {
          "result": "Departure Success : " + merchant.name
        }
      } else {
        return {
          "result": "Order has already completed."
        }
      }
    } else {
      return {
        "result": "Out of stock."
      }
    }
  }

  async shelf_list({
    request
  }) {

  }
}


module.exports = GunController
