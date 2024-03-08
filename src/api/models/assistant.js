const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const assistantSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, collection: 'resurrectionAssistant' }
);

assistantSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const Assistant = mongoose.model(
  'resurrectionAssistant',
  assistantSchema,
  'resurrectionAssistant'
);

module.exports = Assistant;
