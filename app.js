import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import pageRoute from "./routes/pageRoute.js"
import newsRoute from "./routes/newsRoute.js"
import userRoute from "./routes/userRoute.js"
import teamsRoute from "./routes/teamsRoute.js"
import fileUpload from "express-fileupload"
import {v2 as cloudinary} from "cloudinary"


import refereesRoute from "./routes/refereesRoute.js"


dotenv.config();

cloudinary.config({
    cloud_name : process.env.ClOUD_NAME,
    api_key : process.env.CLOUD_API_KEY,
    api_secret : process.env.CLOUD_API_SECRET,

})

//connection to DB
conn();

const app = express()
const port = process.env.PORT;

//ejs template engine
app.set('view engine', 'ejs')


//static files middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileupload({useTempFiles: true}));
//routes
app.use('/', pageRoute);
app.use('/news', newsRoute);
app.use('/user', userRoute);
app.use('/teams', teamsRoute);

app.use('/referees', refereesRoute);


app.listen (port, ()=> {
    console.log(`running on: ${port}`);
})