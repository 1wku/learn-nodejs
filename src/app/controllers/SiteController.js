const Course = require('../models/Course')
const MongooseHelper = require('../../util/mongoose')
class SiteController {
	//[GET] / <home>
	home(req, res, next) {
		//Model
		Course.find({})
			.then((courses) => {
				//Views
				res.render('home', { courses: MongooseHelper.multiMgToObject(courses) })
			})
			.catch(next)
	}

	//[GET] /search
	search(req, res) {
		res.render('search')
	}
}

module.exports = new SiteController()
