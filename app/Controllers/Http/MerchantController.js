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
      name: 'required|min:2|max:64',
      attr: 'required|min:1|max:255',
      barcode: 'required|min:8|max:8',
      checkbox: 'required|boolean',
      amount: 'integer',
      size: 'integer|min:0|max:2',
      arrived: 'integer',
      checked: 'integer',
      departured: 'integer'
    }

    const validation = await ValidityState(request.all(), rules)
    if(validation.fails()){
      session
        .withErrors(validation.messages())
        .flashAll()
      return response.redirect('/merchant')
    }

    const newMerchant = request.only(
      'name',
      'attr',
      'size',
      'barcode',
      'price',
      'cost',
      'amount',
      'arrived',
      'checked',
      'departured'
    )
    console.log(newMerchant)
    const merchant = await Merchant.create(newMerchant)

    return response.redirect('/merchant')
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
}

module.exports = MerchantController
