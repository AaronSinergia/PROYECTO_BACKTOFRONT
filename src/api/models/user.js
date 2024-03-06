const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: false },
  },
  { timestamps: true, collection: 'resurrectionWorkers' }
);

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model(
  'resurrectionWorkers',
  userSchema,
  'resurrectionWorkers'
);

module.exports = User;
