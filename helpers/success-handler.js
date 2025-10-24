const handleSuccess = (res, data , statusCode=200) =>{
    console.log(data);
    return  res.status(statusCode).json({ 
        success: true,
        data
    })
}
module.exports = { handleSuccess }