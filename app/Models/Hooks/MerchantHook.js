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
        break;
    }
  }
}

MerchantHook.saveFragile = async (merchantInstance) => {
  if(merchantInstance){
    switch(merchantInstance.fragile){
      case '普通':
        merchantInstance.fragile = undefined
        merchantInstance.fragile = 0
      break;
      case '易碎':
        merchantInstance.fragile = undefined
        merchantInstance.fragile = 1
        break;
    }
  }
}

MerchantHook.readSize = async (merchantInstance) => {
  if(merchantInstance) {
    switch(merchantInstance.size){
      case 0:
        merchantInstance.size = undefined
        merchantInstance.size = '小'
        break;
      case 1:
        merchantInstance.size = undefined
        merchantInstance.size = '中'
        break;
      case 2:
        merchantInstance.size = undefined
        merchantInstance.size = '大'
        break;
    }
  }
}

MerchantHook.saveSize = async (merchantInstance) => {
  if(merchantInstance) {
    switch(merchantInstance.size){
      case '小':
        merchantInstance.size = undefined
        merchantInstance.size = '0'
        break;
      case '中':
        merchantInstance.size = undefined
        merchantInstance.size = '1'
        break;
      case '大':
        merchantInstance.size = undefined
        merchantInstance.size = '2'
        break;
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