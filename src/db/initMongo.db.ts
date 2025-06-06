import { MongoClient, Db } from 'mongodb'
import envConfig from '../constants/config'

// const mongoClient = new MongoClient(envConfig.MONGODB_URI)

// const connectDB = mongoClient.connect().then((res) => {
//     console.log('MongoDB connected')
// })

// apply 'SingleTon' pattern
class Database {
    // declare type
    private static instance: Database
    private client: MongoClient
    private db: Db
    private isConnected: Boolean = false
    constructor() {
        this.client = new MongoClient(envConfig.MONGODB_URI, {
            maxPoolSize: 10, // maxPoolsize -> overload -> queue
        })
        this.db = this.client.db(envConfig.dbName) // created -> DB
    }

    // getInstance method
    public static getInstance(): Database {
        if (!this.instance) {
            this.instance = new Database()
        }
        return Database.instance
    }


    // connect DB
    async connect(type: string = 'mongodb') {
        if (type == 'mongodb') {
            try {
                if (this.isConnected) {
                    console.log('Already connected to MongoDB')
                    return
                }
                await this.client.connect()
                this.isConnected = true
                const connectionCount = await this.getConnectionCount()
                console.log(`MongoDB connected with Singleton Pattern, count connection ${connectionCount}`)
            } catch (error) {
                console.log('error', error);
            }
        }
    }

    // get current connection count
    async getConnectionCount(): Promise<number> {
        try {
            // enter database access -> admin role
            const serverStatus = await this.db.admin().command({ serverStatus: 1 })
            return serverStatus.connections?.current
        } catch (error) {
            console.error('Failed to get connection count:', error)
            return 0
        }
    }

}

// Export singleton instance
const dbInstance = Database.getInstance()

export default dbInstance

