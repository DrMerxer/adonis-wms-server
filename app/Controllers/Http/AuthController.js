'use strict'

const { validateAll } = use('Validator')
const User = use('App/Models/User')
class AuthController {
  async logout({ auth, response }) {
    await auth.logout()
    return response.redirect('back')
  }

  async login({ view, auth, response }) {
    // return view.render('auth.login')
    // check login status and redirect

    try {
      await auth.check()
    } catch (error) {
      return view.render('auth.login')
    }

    return response.redirect('home')
  }

  async auth({ request, response, auth, session }) {

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
    const usr = await User.findBy('email', email)
    usr.merge({'last_login': new Date()})
    usr.save()
    const user = await auth.getUser()
    return response.redirect('home')
  }
}

module.exports = AuthController
