import { Schema, model } from "mongoose";

const fooSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Foo = model("Foo", fooSchema);
