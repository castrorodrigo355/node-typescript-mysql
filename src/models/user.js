const { Schema, mongoose } = require("../database/database");
var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

var User = mongoose.model("User", userSchema);

module.exports = { User };
