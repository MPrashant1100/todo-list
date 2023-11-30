import mongoose, { Model, Schema } from "mongoose";

interface TodoDocumentModel {
  title: string;
  description: string;
  completed: boolean;
}
const todoSchema: Schema<TodoDocumentModel> =
  new mongoose.Schema<TodoDocumentModel>(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true },
  );

const Todo: Model<TodoDocumentModel> =
  mongoose.models?.Todo ||
  mongoose.model<TodoDocumentModel>("Todo", todoSchema);

export default Todo;
