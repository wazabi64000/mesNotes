import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import {z} from 'zod'
import { createProfessor, findUserByEmail } from '../models/user.model.js'


export const authSchema = z.object({
    email: z.email().min(3, "l'email doit contenir en moins 3 caracteres"),
    password: z.string().min(8)
})

export const register =  async (req, res) => {
    const {email, password } = req.body;

    const existing = await findUserByEmail(email)
    if (existing)  return res.status(400).json({mesage: "Email déjà existant "})

        const hashed =  await argon2.hash(password)
        const id = await createProfessor(email, hashed)

       res.status(201).json({message: "Professeur créé ", id, email}) 
}