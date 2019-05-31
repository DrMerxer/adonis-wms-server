'use strict'
const Database = use('Database')
const User = use('App/Models/User')
const Cargo = use('App/Models/Cargo')
const Ship = use('App/Models/Ship')
const Shelf = use('App/Models/Shelf')
const Merchant = use('App/Models/Merchant')
const RFID = use('App/Models/Rfid')
class GunController {
  async get({request, response, params}) {
    const barcode = params.barcode
    const tagId = params.tagid
    const shipId = params.shipid
    //Handles tags not exists scenario
    
    // await Database.from('rfids').whereNotExists(function(){
    //   const error = {"error":"TagNotExist"}
    //   return response.json(error)
    // })

    try {
      const rfid = await RFID.findByOrFail('tagid',tagId)
      if(rfid != null){
        return response.send({"type":"error","content":"DuplicateCargo"})
      }
    } catch (ModelNotFoundException) {
      console.log("RFIDTagNotFound")
      return response.send({"type":"error","content":"RFIDTagNotFound"})
    }

    //Handles barcode not exist scenario
    try {
      await Merchant.findByOrFail('barcode',barcode)
    }catch (ModelNotFoundException){
      console.log("BarcodeNotFound")
      return response.send({"type":"error","content":"BarcodeNotFound"})
    }

    // const nMerchant = await Database.table('merchants').where('barcode', barcode)
    // console.log(nMerchant)

    const targetShip = await Database.table('ships').where('ship_id', shipId)

    const nCargo = new Cargo()
    nCargo.barcode = barcode
    nCargo.tag_id = tagId
    nCargo.order_id = targetShip.order_id
    nCargo.shelf_id = arrive(barcode)
    nCargo.ischecked = false
    nCargo.isdel = false
    Cargo.save(nCargo)
  }

  arrive(barcode){
    const targetMerchant = Database.table('merchants').where('barcode', barcode)
    const merchantSize = targetMerchant.size 
    const merchantFragile = targetMerchant.fragile 

    console.log(merchantSize)

    const targetShelf = Database
      .table('shelves')
      .where('size', merchantSize)
      .where('existing', '<', 'capacity')
      .where('type', merchantFragile)

    const updateShelf = Database
      .table('shelves')
      .where('id', targetShelf.id)
      .update('existing', targetShelf.existing + 1)
    console.log(updateShelf)

    return targetShelf.id
  }
}


module.exports = GunController
