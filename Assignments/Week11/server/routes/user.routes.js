const express=require("express")
const authController=require("../controllers/auth.controller");
const authMiddleware=require("../middleware/auth.middleware")
const router=express.Router()

router.post('/user/signup',authController.signup)
router.post('/user/signin',authController.signin)
router.patch('/user/updateDetails',authMiddleware.authMiddleware,authController.updateDetails)
router.get('/user/fetch',authMiddleware.authMiddleware,authController.getUsers)

module.exports=router