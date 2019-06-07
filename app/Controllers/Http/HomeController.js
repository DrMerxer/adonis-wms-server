'use strict'
const Cargo = use('App/Models/Cargo')
const User = use('App/Models/User')
const Database = use('Database')
class HomeController {
    async index ({ auth, request, response, view }) {
        const kpi = await Database
            .table('cargos')
            .where('updated_at','>', new Date(new Date().setHours(0,0,0,0)))
            .count()

        const allCargo = await Database.from('cargos').count()

        const arriveToday = await User
            .query()
            .where('last_login', '>', new Date(new Date().setHours(0,0,0,0)))
            .count()

        const dash = {
            cc:allCargo[0]['count(*)'],
            at:arriveToday[0]['count(*)'],
            kpi:kpi[0]['count(*)']
        }

        // const cargoCount = await allCargo[0]['count(*)']
        // const arriveTodayCount = await arriveToday[0]['count(*)']
        // const kpiCount = await kpi[0]['count(*)']
        console.log(dash.kpi)
        return view.render('home.index', { dash })
    }

    
}

module.exports = HomeController
