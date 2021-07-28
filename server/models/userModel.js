const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isEditOn: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('Users', UserSchema);

module.exports = User;
