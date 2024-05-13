const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db.js')
const router = require('./routes')
const cookieParser = require('cookie-parser')

const app = express()

// cookie-parser middleware'ini cors ve express.json() middleware'lerinden önce ekle
app.use(cookieParser())

// cors middleware'ini eklerken origin'i doğru şekilde belirleyin
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(express.json())
app.use("/api", router)

const PORT = 8080 || process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to MongoDB");
        console.log(`Server is running on port ${PORT}`)
    })
})
