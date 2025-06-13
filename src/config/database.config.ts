import { MongoClient, Db } from 'mongodb';
import envConfig from '~/config/env.config';

class DatabaseServices {
  private static instance: DatabaseServices
  private client: MongoClient | null
  private db: Db | null
  private isConnected: boolean
  constructor() {
    this.client = null
    this.db = null
    this.isConnected = false
  }

  static getInstance(): DatabaseServices {
    if (!DatabaseServices.instance) {
      DatabaseServices.instance = new DatabaseServices()
    }
    return DatabaseServices.instance
  }

  async connect(): Promise<void> {
    if (this.isConnected) {
      console.log('💡 Already connected to MongoDB')
      return
    }
    try {
      this.client = new MongoClient(envConfig.DB_URI, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4
      })

      await this.client.connect()
      this.db = this.client.db(envConfig.DB_NAME)

      // veryfi connection
      await this.db.command({
        ping: 1
      })
      console.log('✅ Successfully connected to MongoDB!')
      this.isConnected = true
    } catch (error) {
      console.error('❌ MongoDB connection failed:', error)
      // disconnect
      await this.disConnected()
    }
  }

  // disconnect
  async disConnected(): Promise<void> {
    try {
      if (this.client) {
        await this.client.close()
        this.client = null
        this.db = null
        this.isConnected = false
        console.log('📴 Disconnected from MongoDB')
      }
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error)
      throw error
    }
  }

  getDb(): Db {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first')
    }
    return this.db
  }
}

const databaseServices = DatabaseServices.getInstance()
export default databaseServices