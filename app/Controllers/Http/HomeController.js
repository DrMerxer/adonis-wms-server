'use strict'
const Cargo = use('App/Models/Cargo')
class HomeController {
    async index ({ request, response, view }) {

      
        return view.render('home.index')
    }
}

module.exports = HomeController
