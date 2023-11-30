import { databaseModels } from '@/contants';
import { UserDocumentModel } from '@/interface';
import mongoose, { Model, Schema } from 'mongoose';
  
// Create Schema 
const userSchema: Schema<UserDocumentModel> = new Schema<UserDocumentModel> (
    {
        firstName: {
            type: String,
            required: true
        },
        contact: {
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