require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json());

// const authRoute = require('./src/routes/auth/auth')
const generalRoutes = require('./src/routes/general/generalRoutes')

// app.use('/auth', authRoute)
app.use('/', generalRoutes)

const port = process.env.SERVER_PORT

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})