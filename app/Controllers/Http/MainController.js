'use strict'

class MainController {
   render({ request, view }){
      const name = request.input('name')
      return view.render('hello', {name})
   }
}

module.exports = MainController
