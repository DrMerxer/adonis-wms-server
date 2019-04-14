'use strict'

class AuthController {
   async login({ view }) {
      return view.render('auth.login')
   }

   async auth ({ request, response, auth }) {
      const { uid, password } = request.all()

      await auth.attempt(uid, password)

      const user = await auth.getUser()
      return response.route('UserController.show', {id: user.id})
   }
}

module.exports = AuthController
