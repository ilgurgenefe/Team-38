import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import pageRoute from "./routes/pageRoute.js"
import newsRoute from "./routes/newsRoute.js"
import userRoute from "./routes/userRoute.js"
import teamsRoute from "./routes/teamsRoute.js"


import refereesRoute from "./routes/refereesRoute.js"


dotenv.config();

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

//routes
app.use('/', pageRoute);
app.use('/news', newsRoute);
app.use('/user', userRoute);
app.use('/teams', teamsRoute);

app.use('/referees', refereesRoute);


app.listen (port, ()=> {
    console.log(`running on: ${port}`);
})