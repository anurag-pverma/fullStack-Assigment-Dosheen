import mongoose from "mongoose"
const { Schema } = mongoose;

const UserSchma = new Schema({
  name: String,
  email: String,
  password:String,
  repeatePassword:String,

});

export default new mongoose.model("UserData", UserSchma)
