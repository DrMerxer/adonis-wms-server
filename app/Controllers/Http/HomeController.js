'use strict'

class HomeController {
    async index ({ request, response, view }) {
      
        return view.render('home.index')
    }
}

module.exports = HomeController
