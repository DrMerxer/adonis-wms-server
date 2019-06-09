'use strict'

const Hash = use('Hash')

const UserHook = exports = module.exports = {}

UserHook.hashPassword = async (userInstance) => {
   if (userInstance.password){
      userInstance.password = await Hash.make(userInstance.password)
   }
}

UserHook.readGender = async (user) => {
  if(user){
    switch(user.gender){
      case 0:
        user.gender = undefined
        user.gender = '女'
      case 1:
        user.gender = undefined
        user.gender = '男'
    }
  }
}

UserHook.saveGender = async (user) => {
  if(user){
    switch(user.gender){
      case '女':
        user.gender = undefined
        user.gender = 0
      case '男':
        user.gender = undefined
        user.gender = 1
    }
  }
}

UserHook.readGenders = async(users,meta) => {
  if(users){
    for(var user of users){
      switch(user.gender){
        case 0:
          user.gender = undefined
          user.gender = '女'
          break
        case 1:
          user.gender = undefined
          user.gender = '男'
          break
      }
    }
  }
}