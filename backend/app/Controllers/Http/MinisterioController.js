'use strict'

const Ministerio = use('App/Models/Ministerio')
/**
 * Resourceful controller for interacting with ministerios
 */
class MinisterioController {
  /**
   * Show a list of all ministerios.
   * GET ministerios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const ministerio = await Ministerio.all()
    return ministerio
  }


  /**
   * Create/save a new ministerio.
   * POST ministerios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['min_nome', 'min_descricao'])
    const ministerio = await Ministerio.create(data)

    return ministerio
  }

  /**
   * Display a single ministerio.
   * GET ministerios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ct
   * @param {View} ctx.view
   */
  async show ({ params, request, view }) {
    const ministerio = await Ministerio.find(parms.id)

    return ministerio
  }


  /**
   * Update ministerio details.
   * PUT or PATCH ministerios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ct
   */
  async update ({ params, request }) {
    const data = request.only(['min_nome','min_descricao'])
    const ministerio = await Ministerio.find(params.id)

    ministerio.merge(data)
    await ministerio.save()

    return ministerio

  }

  /**
   * Delete a ministerio with id.
   * DELETE ministerios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ct
   */
  async destroy ({ params, request }) {
    const ministerio = await Ministerio.find(params.id)

    await ministerio.delete()
  }
}

module.exports = MinisterioController
