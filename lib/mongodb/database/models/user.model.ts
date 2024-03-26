import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    uniqure: true,
  },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, default: "", require: true },
  lastName: { type: String, default: "", require: true },
  photo: { type: String },
});

const User = models.User || model("User", UserSchema);

export default User;
