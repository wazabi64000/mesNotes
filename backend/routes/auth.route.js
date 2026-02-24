import express from "express"
import { validate } from "../middleware/validate.middleware.js"
import { authSchema, register } from "../controllers/auth.controller.js"


const router = express.Router()

router.post('/register', validate(authSchema), register)

export default router