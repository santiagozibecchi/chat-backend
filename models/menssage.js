import { Schema, model } from "mongoose";

const MessageSchema = Schema(
  {
    of: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    for: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

MessageSchema.method("toJson", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

export default model("Message", MessageSchema);
