import express from 'express'
import envConfig from '~/config/env.config'
import helmet from 'helmet'

const app = express()

// init middleware
app.use(helmet())

// init db

// init route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello world'
  })
})

app.listen(envConfig.PORT, () => {
  console.log(`Server is running at http://localhost:${envConfig.PORT}`);
})
