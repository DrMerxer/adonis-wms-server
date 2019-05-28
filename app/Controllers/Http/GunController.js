'use strict'
const User = use('App/Models/User')
const Cargo = use('App/Models/Cargo')
const Merchant = use('App/Models/Merchant')
const RFID = use('App/Models/Rfid')
class GunController {
  async arrive({request, response}) {
    const arriveContent = request.is(['json'])
    const barcode = arriveContent.barcode
    const tagId = arriveContent.tagId
    //Handles tags not exists scenario
    
    // await Database.from('rfids').whereNotExists(function(){
    //   const error = {"error":"TagNotExist"}
    //   return response.json(error)
    // })

    try {
      await RFID.findByOrFail('tagid',tagId)
    } catch (ModelNotFoundException) {
      console.log("RFIDTagNotFound")
      return response.json({"type":"error","content":"RFIDTagNotFound"})
    }

    //Handles barcode not exist scenario
    try {
      await Merchant.findByOrFail('barcode',barcode)
    }catch (ModelNotFoundException){
      console.log("BarcodeNotFound")
      return response.json({"type":"error","content":"BarcodeNotFound"})
    }

    const nMerchant = await Merchant.findByOrFail('barcode',barcode)
    console.log(nMerchant)
    
    const nCargo = new Cargo()



  }
}


module.exports = GunController
