import express from 'express'
import { connect } from './config/ConnectDB.js';
import route1 from './routes/UserRoutes.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app=express();
const PORT=process.env.PORT;

connect();

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({'extended':false}))

app.use('',route1)

app.listen((PORT),()=>{
    console.log(`Server started at ${PORT}`);
})