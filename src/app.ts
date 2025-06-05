import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import dbServices from './db/initMongo.db'


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

// compression => down loading banlance data
app.use(compression())


// connect DB (initial MongoDb)
app.use(async () => {
    await dbServices
})


// App can use Json format
app.use(express.json())

// routes
app.get('/', (req, res, next) => {
    const str = 'Hello devInh08'
    res.status(200).json({
        message: "Hello world".repeat(1000000)
    })
})

export default app