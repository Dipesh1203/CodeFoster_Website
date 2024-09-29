import mongoose, { Document, Model } from "mongoose";

export interface FormDataDocument extends Document {
  name: string;
  email: string;
  message: string;
}

const FormDataSchema = new mongoose.Schema<FormDataDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const FormData: Model<FormDataDocument> =
  mongoose.models.FormData ||
  mongoose.model<FormDataDocument>("FormData", FormDataSchema);
export default FormData;
