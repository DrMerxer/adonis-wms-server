'use strict'

const ShelfHook = exports = module.exports = {}
const Model = use('Model')

ShelfHook.readSizes = async (shelves, meta) => {
  if(shelves){
    for(var shelf of shelves){
      switch (shelf.size) {
        case 0:
          console.log(shelf.size)
          shelf.size = undefined
          shelf.size = '小'
          break
        case 1:
          shelf.size = undefined
          shelf.size = '中'
          break
        case 2:
          shelf.size = undefined
          shelf.size = '大'
          break
      }
    }
  }
}

ShelfHook.readTypes = async (shelves, meta) => {
  if(shelves){
    for(var shelf of shelves){
      switch (shelf.type) {
        case 0:
          shelf.type = undefined
          shelf.type = '普通'
          break;
        case 1:
          shelf.type = undefined
          shelf.type = '易碎'
          break
      }
    }
  }
}