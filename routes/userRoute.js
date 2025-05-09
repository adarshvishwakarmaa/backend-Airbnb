import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { getCurrentUser } from "../controller/userController.js"

let userRouter = express.Router()

userRouter.get("/currentuser",isAuth,getCurrentUser)

export default userRouter