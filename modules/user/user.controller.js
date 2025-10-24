const {UserRegisterService , AllUserService , SingleUserService} = require('./user.service')
const { handleError } = require('../../helpers/error-handlers');
const {handleSuccess} = require('../../helpers/success-handler');


const UserRefisterController = async (req,res) => {
    const data = req.body;
    try{
        const result = await UserRegisterService(data)
        handleSuccess(res, result);
    }catch(error){
        handleError(res, error)
    } 
}


const AllUserController = async(req,res)=>{
    try{
        const result = await AllUserService()
        handleSuccess(res, result)
    }catch(error){
        handleError(res, error)
    }
}


const SingleUserController = async(req,res)=>{
    const {id} = req.params
    try{
        const result = await SingleUserService(id)
        handleSuccess(res,result)
    }catch(error){
        handleError(res,error)
    }
};

module.exports = {UserRefisterController, AllUserController , SingleUserController}