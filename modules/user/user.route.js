const { Router } = require('express');
const router = Router();
const {UserRefisterController, AllUserController , SingleUserController} = require('./user.controller');




router.post('/register', UserRefisterController)


router.get("/all-users", AllUserController)


router.get("/user/:id", SingleUserController)



const UserRouter = router
module.exports = UserRouter;
