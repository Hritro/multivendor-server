const prisma = require('../../config/prisma.config');
const { handleError } = require('../../helpers/error-handlers');

const UserRegisterService = async (res,data) =>{
    console.log(data)
    const isUserExist = await prisma.user.findUnique({
            where: {  //where is used to filter data based on unique fields
                email : data.email
            }
        })
        if(isUserExist){
            return handleError(res,"User already exists",401)
        }
       const result = await prisma.user.create({
        data
    });

    return result
}

const AllUserService = async () => {
    const result = await prisma.user.findMany();
    return result
}

const SingleUserService = async (id) => {
    const result = await prisma.user.findUnique({
            where:{
                id: Number(id)
            },
        });
    return result
}

module.exports = {
    UserRegisterService,
    AllUserService,
    SingleUserService
}