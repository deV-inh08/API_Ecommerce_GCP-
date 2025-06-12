import express from 'express'
import envConfig from '~/config/env.config'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'

const app = express()

// init middleware
app.use(helmet())
app.use(morgan('dev'))
// app.use(compression())

// init db

// init route
app.get('/', (req, res) => {
  const str = 'duongvinh'
  res.status(200).json({
    message: 'Hello world',
    metaData: str.repeat(100000)
  })
})

app.listen(envConfig.PORT, () => {
  console.log(`Server is running at http://localhost:${envConfig.PORT}`);
})
