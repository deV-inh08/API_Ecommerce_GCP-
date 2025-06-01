import express from 'express'
import morgan from 'morgan'
// app
const app = express()

// init middleware
app.use(morgan('dev'))
// app.use(morgan('tiny'))
// app.use(morgan('combined'))
// app.use(morgan('common'))

// init DB

// App can use Json format
app.use(express.json())

// routes
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Hello world"
    })
})

export default app