import { databaseModels } from "@/contants";
import { VideoDocumentModel } from "@/interface";
import mongoose, { Model, Schema } from "mongoose";
import { ST } from "next/dist/shared/lib/utils";

const videoSchema: Schema<VideoDocumentModel> = new Schema<VideoDocumentModel>(
  {
    videoFile: {
        type: String, // Cloudinary url,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    views: {
        type: Number,
        default: 0
    },
    isPublised: {
        type: Boolean,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }    
  },
  {
    timestamps: true,
  }
);

const Video: Model<VideoDocumentModel> =
  mongoose.models?.Video ||
  mongoose.model< VideoDocumentModel > ( 
    databaseModels.VIDEO, 
    videoSchema
);

export default Video;
