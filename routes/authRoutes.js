import express from 'express'
import { registerController,loginController, currentUserController } from '../controllers/authController.js'
import authUser from '../middlewares/authMiddleware.js'

const router = express.Router()

//routes
router.post('/register', registerController)
router.post('/login', loginController)

//get current user

router.get('/current-user', authUser, currentUserController)


export default router