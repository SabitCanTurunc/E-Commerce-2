const express = require('express');


const router = express.Router();

const userSignUpController =require("../controller/userSignUp")
router.post("/SignUp",userSignUpController)


module.exports = router