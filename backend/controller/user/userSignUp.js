const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs');

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body

        const user = await userModel.findOne({ email })

        console.log("user", user)

        if (user) {
            throw new Error("Kullanıcı zaten mevcut.")
        }

        if (!email) {
            throw new Error("Lütfen e-posta adresinizi giriniz")
        }
        if (!password) {
            throw new Error("Lütfen şifrenizi giriniz")
        }
        if (!name) {
            throw new Error("Lütfen adınızı giriniz")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("Bir şeyler ters gitti")
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "Kullanıcı başarıyla oluşturuldu!"
        })

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignUpController
