import { databaseModels } from '@/contants';
import { UserDocumentModel } from '@/interface';
import mongoose, { Model, Schema } from 'mongoose';
  
// Create Schema 
const userSchema: Schema<UserDocumentModel> = new Schema<UserDocumentModel> (
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true },
)

// Create Model 
const User: Model<UserDocumentModel> = 
    mongoose.models?.User || 
    mongoose.model<UserDocumentModel> (
        databaseModels.USER,    // Object key create at contants folder
        userSchema,
    )

// export that model
export default User;