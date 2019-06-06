'use strict'

const MerchantHook = exports = module.exports = {}

MerchantHook.savePrice = async (merchantInstance) => {
  if(merchantInstance.price){
    merchantInstance.price = parseInt(parseFloat(merchantInstance.price) * 100)
  }
}

MerchantHook.readPrice = async (merchantInstance) => {
  if(merchantInstance.price){
    merchantInstance.price = parseFloat(merchantInstance.price) / 100
  }
}

MerchantHook.readFragile = async (merchantInstance) => {
  if(merchantInstance){
    switch(merchantInstance.fragile){
      case 0:
        merchantInstance.fragile = undefined
        merchantInstance.fragile = '普通'
      break;
      case 1:
        merchantInstance.fragile = undefined
        merchantInstance.fragile = '易碎'
    }
  }
}

MerchantHook.readSize = async (merchantInstance) => {
  if(merchantInstance) {
    switch(merchantInstance.size){
      case 0:
        merchantInstance.size = undefined
        merchantInstance.size = '小'
      case 1:
        merchantInstance.size = undefined
        merchantInstance.size = '中'
      case 1:
        merchantInstance.size = undefined
        merchantInstance.size = '大'
    }
  }
}

MerchantHook.readCost = async (merchantInstance) => {
  if(merchantInstance.cost){
    merchantInstance.cost = parseFloat(merchantInstance.cost) / 100
  }
}

MerchantHook.saveCost = async (merchantInstance) => {
  if(merchantInstance.cost){
    merchantInstance.cost = parseInt(parseFloat(merchantInstance.cost) * 100)
  }
}