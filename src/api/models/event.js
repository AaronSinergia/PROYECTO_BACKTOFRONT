const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    img: { type: String, required: false },
    title: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    assistants: [
      { type: mongoose.Types.ObjectId, ref: 'resurrectionAssistant' },
    ],
  },
  { timestamps: true, collection: 'resurrectionEvent' }
);

const Event = mongoose.model(
  'resurrectionEvent',
  eventSchema,
  'resurrectionEvent'
);

module.exports = Event;
