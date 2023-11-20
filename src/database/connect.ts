import { envConfig } from '@/contants';
import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        // Use envConfig.MONGODB_URI here 
        await mongoose.connect('mongodb://127.0.0.1:27017/local-dev')
    }   catch (error) {
        console.error('Error connecting to MongoDB:', error)
    } 
}

export default connectToDatabase;
