import {Router} from "express"
import { register, login, verifyToken, logout } from "../controllers/auth.controller.js"
import { validatorSchema } from "../middlewares/validator.middleware.js"
import { loginSchema, registerSchema } from "../schemas/auth.schema.js"

const router = Router()

router.post("/register", validatorSchema(registerSchema), register)
router.post("/login", validatorSchema(loginSchema), login)
router.get("/verifyToken", verifyToken)
router.post("/logout", logout)

export default router