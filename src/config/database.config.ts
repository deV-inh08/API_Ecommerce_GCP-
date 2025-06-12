import { MongoClient, Db } from "mongodb";
import envConfig from "~/config/env.config";

class DatabaseManager {
  private client: MongoClient | null
  private db: Db | null
  private isConnected: boolean
  constructor() {
    this.client = null
    this.db = null
    this.isConnected = false
  }

  async connect() {
    if (this.isConnected && this.client) {
      return this.db
    } else {
      try {
        this.client = new MongoClient(envConfig.DB_URI)
        await this.client.connect()
        console.log('MongoDb connected is successfully');
        this.db = this.client.db(envConfig.DB_NAME)
        this.isConnected = true
      } catch (error) {
        // need custom type for Error Message
        throw new Error(`Database connection failed: ${error}`)
      }
    }
  }
}

const databaseManager = new DatabaseManager().connect()
export default databaseManager