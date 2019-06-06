'use strict'
const Merchant = use('App/Models/Merchant')
const { validate } = use('Validator')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with merchants
 */
class MerchantController {
  /**
   * Show a list of all merchants.
   * GET merchants
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const page = request.input('page')
    const perPage = 15
    const merchants = await Merchant 
      .query()
      .paginate(page, perPage)
    console.log(merchants.toJSON())
    return view.render('merchant.index', {...merchants.toJSON()})
  }

  /**
   * Render a form to be used for creating a new merchant.
   * GET merchants/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('merchant.create')
  }

  /**
   * Create/save a new merchant.
   * POST merchants
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, session }) {

    const rules = {
      name: 'required|min:2|max:60',
      attr: 'required|min:1|max:255',
      barcode: 'required|min:8|max:13',
      price: 'required',
      cost: 'required',
      amount: 'integer',
      arrived: 'integer',
      checked: 'integer',
      departured: 'integer'
   }

   const validation = await validate(request.all(), rules)

   if (validation.fails()){
      session
         .withErrors(validation.messages())
         .flashAll()
      return response.redirect('back')
   }

    var newMerchant = request.only([
      'name',
      'attr',
      'size',
      'fragile',
      'barcode',
      'amount',
      'arrived',
      'checked',
      'departured',
      'cost',
      'price'
    ])
    console.log(newMerchant)
    const merchant = await Merchant.create(newMerchant)

    return response.redirect('/merchants')
  }

  /**
   * Display a single merchant.
   * GET merchants/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

  }

  /**
   * Render a form to update an existing merchant.
   * GET merchants/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const merchant = await Merchant.findBy('id', params.id)

    return view.render('merchant.edit', { merchant })
  }

  /**
   * Update merchant details.
   * PUT or PATCH merchants/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a merchant with id.
   * DELETE merchants/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }

  async detail({ request, view }){
    const id = request.input('id')
    const merchant = await Merchant.findBy('id', id)
      
    console.log(merchant)
    return view.render('merchant.detail', { merchant })
  }
}

module.exports = MerchantController
