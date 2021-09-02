const Course = require('../models/Course')
const MongooseHelper = require('../../util/mongoose')
class CourseController {
    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.json(course)
            })
            .catch(next)
    }

}

module.exports = new CourseController()