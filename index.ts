import app from './src/app'
import envConfig from './src/config'

// listen PORT
const server = app.listen(envConfig.PORT, () => {
    console.log(`Server is running at http://localhost:${envConfig.PORT}`)
})

// When server turn off => log
process.on('SIGINT', () => {
    server.close(() => console.log('Exit Server Express'))
})