import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
// import dbServices from './db/initMongo.db'
import dbInstance from './db/initMongo.db'
import router from './routes/index.route'


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
dbInstance.connect().then()


// App can use Json format
app.use(express.json())

// init routes
app.use(router)

export default app