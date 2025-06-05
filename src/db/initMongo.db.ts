import { MongoClient, Db } from 'mongodb'
import envConfig from '../constants/config'

// const mongoClient = new MongoClient(envConfig.MONGODB_URI)

// const connectDB = mongoClient.connect().then((res) => {
//     console.log('MongoDB connected')
// })

// apply 'SingleTon' pattern

class Database {
    // declare type
    private client: MongoClient
    constructor() {
        this.client = new MongoClient(envConfig.MONGODB_URI)
    }

    // connect DB
    async connect() {
        try {
            this.client.connect().then(() => {
                console.log('MongoDb connected with SingleTon Pattern')
            })
        } catch (error) {
            console.log('error', error);
        }
    }
}

const dbServices = new Database().connect()
export default dbServices

