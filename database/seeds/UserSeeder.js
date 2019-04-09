'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')
class UserSeeder {
  async run () {
     const users = [
        {
           username:'张三',
           email:'adobe@photoshop.com',
           birth:'97-12-11 06:00:00',
           gender:true,
           isdel:false,
           last_login:'14-01-23 07:34:22',
           level:3,
           password:'soifjaosifjoas'
        }
     ]

     User.createMany(users)
  }
}

module.exports = UserSeeder
