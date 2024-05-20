const bcrypt = require('bcryptjs')
const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body

        if (!email) {
            throw new Error("Lütfen e-posta adresinizi giriniz")
        }
        if (!password) {
            throw new Error("Lütfen şifrenizi giriniz")
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            throw new Error("Kullanıcı bulunamadı")
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        console.log("checkPassword", checkPassword)

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

            const tokenOption = {
                httpOnly: true,
                secure: true
            }

            res.cookie("token", token, tokenOption).status(200).json({
                message: "Başarıyla giriş yapıldı",
                data: token,
                success: true,
                error: false
            })

        } else {
            throw new Error("Lütfen şifrenizi kontrol ediniz")
        }

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignInController
