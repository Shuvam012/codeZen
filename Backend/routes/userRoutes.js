//userRoutes
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { createUser, getAllUsers ,getUserByEmail ,loginUser} = require('../controllers/userController');
const cors = require('cors');



router.use(cors());



router.post('/register', createUser)

router.post('/login', loginUser)


router.get('/allUsers', getAllUsers)

router.get('/getUser/:email', getUserByEmail)


module.exports = router;


