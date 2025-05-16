import express from 'express'
import {verifyJWT} from './middleware/loginMiddleware'
import UserController from './controller/UserController'

export const router = express.Router()

router.post('/login', UserController.login)

router.get('/user', verifyJWT, UserController.getAllUser)
router.get('/user/:id', verifyJWT, UserController.getUserById)
router.post('/user', verifyJWT, UserController.createUser)
router.put('/user/:id', verifyJWT, UserController.editUser)
router.delete('/user/:id', verifyJWT, UserController.deleteUser)
