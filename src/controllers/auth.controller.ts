import type { Request, Response, NextFunction } from 'express'

class AuthController {
    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(201).json({
                userID: 1
            })
            next()
        } catch (error) {
            next(error)
        }
    }
}

const authController = new AuthController()
export default authController