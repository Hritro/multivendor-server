const handleError = (res, error, statusCode = 500) => {
    console.log(error)
    return res.status(statusCode).json({
        success: false,
        message: error.message || "Internal Server Error",
        error
    })
}

module.exports = {handleError}