import { Schema, model } from "mongoose";

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Para identificar si el usuario esta conectado o no => en tiempo real
  online: {
    type: Boolean,
    default: false,
  },
});

UserSchema.method("toJson", function () {
  const { __v, _id, password, ...object } = this.toObject();
  // user id
  object.uid = _id;
  return object;
});

export default model("User", UserSchema);
