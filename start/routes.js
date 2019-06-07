'use strict'
const Database = use('Database')
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route
  .get('register', 'UserController.create')
  .as('signup')

Route
  .get('login', 'AuthController.login')
  .as('login')

Route
  .post('auth', 'AuthController.auth')
  .as('auth')

Route
  .get('home', 'HomeController.index')
  .as('index')

Route
  .post('logout', 'AuthController.logout')
  .as('logout')

Route
  .get('users/create', ({ response }) => response.route('signup'))

Route
  .get('gun/arrive', 'GunController.arrive')

// Route.get('mdetail', ({ response }) => response.route('mdetail'))

Route.get('merchants/create', 'MerchantController.create')
Route.get('merchants/delete', 'MerchantController.destroy')
Route.get('merchants/edit', 'MerchantController.edit')
Route.post('merchants/update', 'MerchantController.update')
Route.get('merchants/detail', 'MerchantController.detail')

Route.resource('users', 'UserController')

Route.resource('merchants', 'MerchantController')

Route.get('orders', 'OrderController.index')
Route.get('orders/delete', 'OrderController.destroy')
Route.get('orders/create', 'OrderController.create')
Route.post('orders/store', 'OrderController.store')
Route.get('orders/edit', 'OrderController.edit')
Route.post('orders/update', 'MerchantController.update')