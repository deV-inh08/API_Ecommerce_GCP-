import express from 'express'
import envConfig from '~/config/env.config'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import databaseServices from '~/config/database.config'

const app = express()

// init middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(compression())
app.use(express.json())


// init route
app.get('/', (req, res) => {
  const str = 'duongvinh'
  res.status(200).json({
    message: 'Hello world',
    metaData: str.repeat(100000)
  })
})


const startApp = async () => {
  try {
    // connect mongoDB
    await databaseServices.connect()
    // listen server
    app.listen(envConfig.PORT, () => {
      console.log(`Server is running at http://localhost:${envConfig.PORT}`);
    })
    process.on('SIGINT', async () => {
      console.log('\n🔄 Gracefully shutting down...')
      await databaseServices.disConnected()
      process.exit(0)
    })
  } catch (error) {
    console.error('Failed to start app:', error)
    process.exit(1)
  }
}

startApp()
