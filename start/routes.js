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

Route.get('users/udpate_level', 'UserController.update_level')
Route.post('users/level', 'UserController.level')
Route.get('users/change_password', 'UserController.change_password')
Route.get('users/profile', 'UserController.profile')
Route.post('users/update_password', 'UserController.update')
Route.get('users/delete', 'UserController.destroy')

Route
  .get('gun/arrive', 'GunController.arrive')

Route.get('merchants/create', 'MerchantController.create')
Route.get('merchants/delete', 'MerchantController.destroy')
Route.get('merchants/edit', 'MerchantController.edit')
Route.post('merchants/update', 'MerchantController.update')
Route.get('merchants/detail', 'MerchantController.detail')
Route.get('merchants/refresh', 'MerchantController.refresh')
Route.resource('users', 'UserController')

Route.resource('merchants', 'MerchantController')

Route.get('orders', 'OrderController.index')
Route.get('orders/delete', 'OrderController.destroy')
Route.get('orders/create', 'OrderController.create')
Route.post('orders/store', 'OrderController.store')
Route.get('orders/edit', 'OrderController.edit')
Route.post('orders/update', 'MerchantController.update')
Route.get('orders/detail', 'OrderController.show')

Route.get('warehouses', 'WarehouseController.index')
Route.get('warehouses/create', 'WarehouseController.create')
Route.post('warehouses/store', 'WarehouseController.store')
Route.get('warehouses/edit', 'WarehouseController.edit')
Route.post('warehouses/update', 'WarehouseController.update')
Route.get('warehouses/delete', 'WarehouseController.destroy')

Route.get('shelves', 'ShelfController.index')
Route.get('shelves/delete', 'ShelfController.destroy')
Route.get('shelves/move', 'ShelfController.move')
Route.get('shelves/detail', 'ShelfController.detail')
Route.post('shelves/move_cargo', 'ShelfController.move_cargo')
Route.get('shelves/refresh', 'ShelfController.refresh')
Route.get('shelves/create', 'ShelfController.create')
Route.post('shelves/store', 'ShelfController.store')
Route.get('shelves/edit_alias', 'ShelfController.edit_alias')
Route.post('shelves/update', 'ShelfController.update')

Route.get('query', 'QueryController.index')
Route.post('search', 'QueryController.search')