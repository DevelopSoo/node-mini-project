const getLunchService = require('../services/lunchService')

const getLunchController = (request, response) => {
    const lunches = getLunchService
    if (lunches) {
        console.log(lunches)
    } else {
        console.log(2)
    }
    return response.status(200).json({"result": lunches})
}

module.exports = getLunchController