import bodyParser from 'body-parser';
import express  from 'express';
import { Authorize } from './middlewares';
import users from "./routes/users"
import comments from "./routes/comments"
import mongoose from 'mongoose';
import articles from "./routes/articles"
import cors from "cors"
const app  = express()
const port =3001
app.use(cors({origin:'*',methods:["GET","POST","PUT","DELETE"]}))
app.use(bodyParser.json())
app.use("/users",users)
app.use("/articles",articles)
app.use("/comments",comments)
app.listen(port, () => {
    console.log(`listening  http://localhost:${port}`)
})
mongoose.connect('mongodb+srv://sahith:sahith__123@cluster0.f9xv7te.mongodb.net/')