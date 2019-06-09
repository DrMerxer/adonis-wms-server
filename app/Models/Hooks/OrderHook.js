'use strict'

const OrderHook = exports = module.exports = {}
const Model = use('Model')

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

OrderHook.readTypes = async(orders, meta) => {
  if(orders){
    for (var order of orders) {
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
    console.log(orders[0].type)
    console.log(meta)
  }
}

OrderHook.readStatuses = async (statuses, meta) => {
  if(statuses){
    for (var order of statuses){
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
}

OrderHook.readStatus = async (order) => {
  if(order.status){
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