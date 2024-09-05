import express from 'express';

import { getUsers, addUsers } from '../controllers/UserController.js';

const route1=express.Router();

route1.get('/',getUsers)
route1.post('/add',addUsers)

export default route1