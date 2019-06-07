'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.readType = async (order) => {
  if(order){
    switch (order.type) {
      case 0:
        order.type = undefined
        order.type = "买入"
      break;
      case 1:
        order.type = undefined
        order.type = "卖出"
      break;
    }
  }
}

OrderHook.saveType = async (order) => {
  if(order){
    switch (order.type) {
      case "买入":
        order.type = undefined
        order.type = 0
      break;
      case "卖出":
        order.type = undefined
        order.type = 1
      break;
    }
  }
}

OrderHook.readStatus = async (order) => {
  if(order){
    switch (order.status) {
      case 0:
        order.status = undefined
        order.status = "正在进行"
      break;
      case 1:
        order.status = undefined
        order.status = "已完成"
      break;
    }
  }
}

OrderHook.saveStatus = async (order) => {
  if(order){
    switch (order.status) {
      case "正在进行":
        order.status = undefined
        order.status = 0
      break;
      case "已完成":
        order.status = undefined
        order.status = 1
      break;
    }
  }
}