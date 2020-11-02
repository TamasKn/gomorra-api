

function SendData(response, data) {
    return response.send({success: true, data: data})
}

function BadRequest(response) {
    return response.status(400).send({success: false, message: 'No data'})
}

function ServerError(response) {
    return response.status(503).send({success: false, message: 'Server error'})
}

module.exports = {
    SendData,
    BadRequest,
    ServerError
}
