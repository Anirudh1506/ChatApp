import express from 'express';

import { getUsers, addUsers, loginUser } from '../controllers/UserController.js';

const route1=express.Router();

route1.get('/',getUsers)
route1.post('/add',addUsers)
route1.post('/log',loginUser)

export default route1