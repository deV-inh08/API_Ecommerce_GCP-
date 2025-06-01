import fs from 'fs'
import zod from 'zod'
import path from 'path'
import env from 'dotenv'

// config dotenv
env.config({
    path: ".env"
})

// handle Check file '.env'
const checkEnv = async () => {
    if (!fs.existsSync(path.resolve('.env'))) {
        console.log('Not found file .env')
        process.exit(1)
    }
}

checkEnv()

// config schema '.Env'
const configSchema = zod.object({
    PORT: zod.string().default('4000'),
    MONGODB_URI: zod.string(),
    dbName: zod.string()
})

// from schema => object env config => { success: true, data: {  } }
const configServer = configSchema.safeParse(process.env)

// check config isSuccess
// failed
if (!configServer.success) {
    console.log(configServer.error.issues)
    throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
}

// get 'Data'  in configServer
const envConfig = configServer.data
export default envConfig
