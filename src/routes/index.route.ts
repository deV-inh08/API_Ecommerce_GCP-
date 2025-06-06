import express from 'express'
import authRouter from './auth.route'

const router = express.Router()

// 'use' mounted all children route

// authRoute
router.use('/v1/api', authRouter)


export default router