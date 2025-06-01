import express from 'express'
import envConfig from './config'

// app
const app = express()

// App can use Json format
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

// list port
app.listen(envConfig.PORT, () => {
    console.log(`Server is running http://localhost:${envConfig.PORT}`)
})