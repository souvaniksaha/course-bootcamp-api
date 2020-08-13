const Bootcamp = require('../models/Bootcamp');

/**
 * @des      Get all bootcamps
 * @route    GET /api/vi/bootcamps
 * @access   Public
 */
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Show all bootcamp'
    });
}

/**
 * @des      Get a single bootcamp by id
 * @route    GET /api/vi/bootcamps/:id
 * @access   Public
 */
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `show bootcamp of id: ${req.params.id}`

    })
}

/**
 * @des      Create a new Bootcamp
 * @route    POST /api/vi/bootcamps
 * @access   Private
 */
exports.createBootcamp = async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
        success: true,
        message: 'Bootcamp created!'
    })
}

/**
 * @des      update an existing  Bootcamp By id
 * @route    PUT /api/vi/bootcamps/:id
 * @access   Private
 */
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `update bootcamp of id: ${req.params.id}`
    })
}

/**
 * @des      Delete an existing  Bootcamp By id
 * @route    DELETE /api/vi/bootcamps/:id
 * @access   Private
 */
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Delete bootcamp of id: ${req.params.id}`
    })
}