import { Request, Response, NextFunction } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'

const secretKey = process.env.secret_key as string
interface authenticatedRequest extends Request {
    user? : JwtPayload | string
}

export const authenticateToken = async (req: authenticatedRequest, res: Response, next: NextFunction): Promise<any> => {
    const accessToken = req.headers['authorization']?.split(" ")[1];
    if(!accessToken){
        return res.status(401).json({message: "No authentication token provided"})
    }

    jwt.verify(accessToken, secretKey, (error, user) => {
        if(error){
            return res.status(403).json({message: "Invalid access token"})
        }
        req.user = user
        next()
    })
}