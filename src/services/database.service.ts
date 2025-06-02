import { MongoClient, Db, Collection } from "mongodb";
import envConfig from "../constants/config";

class DatabaseServices {
    private client: MongoClient
    private db: Db
    constructor() {
        this.client = new MongoClient(envConfig.MONGODB_URI)
        this.db = this.client.db(envConfig.dbName)
    }

    // connect to DB
    async connect() {
        try {
            // Send a ping to confirm a successful connection
            await this.db.command({
                ping: 1
            })
        } catch (error) {
            console.log('Error', error)
            throw error
        }
    }

    async indexUsers() {

    }
}

const dbServices = new DatabaseServices()

export default dbServices

