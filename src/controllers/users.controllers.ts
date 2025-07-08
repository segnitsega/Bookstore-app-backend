import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();
const secretKey = process.env.secret_key as string
const refreshkey = process.env.refresh_key as string

export const handleSignup = async(req: Request, res: Response): Promise<any> => {
    const {firstName, lastName, email, password} = req.body
    try{
        const userExists = await prisma.user.findUnique({
            where: {email}
        })
        if(userExists){
           return res.status(400).json({message: `User with email ${email} exists`})
        } 
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const userSaved = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword
            }
        })
        if(userSaved){
            return res.status(200).json({message: " New user registered successfully"})
        }
    }catch(e){
        res.status(500).json({message: "Error registering the new user",
            error: e
        })
    }
}

export const handleLogin = async (req: Request, res: Response): Promise<any> => {
    const {email, password} = req.body;

    const userFound = await prisma.user.findUnique({
        where: {email}
    })
    if(!userFound){
        return res.status(400).json({message: `User with email ${email} is not found`})
    }
    const passwordMatch = await bcrypt.compare(password, userFound.password);
    if(!passwordMatch){
        return res.status(400).json({message: `Invalid password`})
    }

    const accessToken = jwt.sign({id: userFound.id, role: userFound.role}, secretKey, {expiresIn: "2h"})

    const refreshToken = jwt.sign({id: userFound.id, role: userFound.role}, refreshkey, {expiresIn: "7d"})

    await prisma.user.update({
        where: {email},
        data: {
            refreshToken
        }
    })

    res.status(200).json({
        message: "login successful",
        accessToken: accessToken,
        refreshToken: refreshToken
    })
}

export default prisma