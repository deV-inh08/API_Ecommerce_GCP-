import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
// app
const app = express()

// init middleware

// morgan => check status
app.use(morgan('dev'))
// app.use(morgan('tiny'))
// app.use(morgan('combined'))
// app.use(morgan('common'))

// security-policy
app.use(helmet())

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