import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
        dbName: "Abhiram"
    })
    console.log('Database Connected Successfully')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
