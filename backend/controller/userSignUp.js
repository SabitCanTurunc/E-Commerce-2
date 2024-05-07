const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');


async function userSignUpController(req, res) {
    try {

        const { email, password, name } = req.body
        const user = await userModel.findOne({ email })

        console.log("user", user)

        if (user) {
            throw new Error("User already exists")
        }

        if (!email) {
            throw new Error("Please enter email")
        }
        if (!password) {
            throw new Error("Please enter password")
        }
        if (!name) {


            throw new Error("Please enter name")
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("Error in hashing password")
        }
        const payload = {

            ...req.body,
            password: hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            message: "User created successfully",
            error: false,
            success: true,
        })


    } catch (err) {

        console.log("error")

        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}
module.exports = userSignUpController