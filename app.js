import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import passport from './config/passport.js'
import SessionRouter from "./routes/Session.routes.js"
import UserRouter from "./routes/Users.routes.js"
import FormRouter from "./routes/form.routes.js"
import TrainerRouter from "./routes/Trainers.routes.js"
import PlanRouter from "./routes/Plans.routes.js"
import ClassRouter from "./routes/Classes.routes.js"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8080;

app.use(cookieParser());
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize());

// Crear las instancias de las rutas
const sessionRouter = new SessionRouter();
const userRouter = new UserRouter();
const formRouter = new FormRouter();
const trainerRouter = new TrainerRouter();
const planRouter = new PlanRouter();
const classRouter = new ClassRouter();


//app.use('/auth', authRoutes)
app.use("/api/sessions", sessionRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/form", formRouter.getRouter());
app.use("/api/trainers", trainerRouter.getRouter());
app.use("/api/plans", planRouter.getRouter());
app.use("/api/classes", classRouter.getRouter());


app.listen(PORT,() =>{
    console.clear()
    console.log(`Escuchando en https://gymfitness-cpgx.onrender.com:${PORT}`)
})