'use strict'

const { validateAll } = use('Validator')

class AuthController {
   async login({ view, auth, response }) {
      return view.render('auth.login')
      try {
         await auth.check()
      } catch (error) {
         return view.render('auth.login')
      }

      return response.redirect('back')
   }

   async auth ({ request, response, auth, session }) {
      const rules = {
         email: 'required',
         password: 'required'
      }

      const validation = await validateAll(request.all(), rules)

      if (validation.fails()) {
         session
            .withErrors(validation.messages())
            .flashAll()
      }

      const { email, password } = request.all()
      await auth.attempt(email, password)

      const user = await auth.getUser()
      return response.route('UserController.show', {id: user.id })
   }
}

module.exports = AuthController
