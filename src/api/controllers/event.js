const { deleteFile } = require('../../utils/deleteFile');
const Event = require('../models/event');

const getEvents = async (req, res, next) => {
  try {
    const events = await Event.find().populate('assistants');
    return res.status(200).json(events);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postNewEvent = async (req, res, next) => {
  try {
    const newEvent = new Event(req.body);

    if (req.files) {
      newEvent.img = req.files.img[0].path;
    }

    const eventDuplicated = await Event.findOne({
      title: req.body.title,
    });

    if (eventDuplicated) {
      return res.status(400).json('Ese nombre ya existe');
    }

    const eventSaved = await newEvent.save();

    return res.status(201).json(eventSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const modifyEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newEvent = new Event(req.body);
    newEvent._id = id;

    if (req.file) {
      newEvent.img = req.file.path;
    }

    const eventUpdated = await Event.findByIdAndUpdate(id, newEvent, {
      new: true,
    });
    return res.status(200).json(eventUpdated);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const eventDeleted = await Event.findByIdAndDelete(id);

    deleteFile(eventDeleted.img);

    return res.status(200).json({
      message: 'User Already Deleted',
      eventDeleted,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getEventsByID = async (req, res, next) => {
  const { id } = req.params;
  try {
    const events = await Event.findById(id);
    return res.status(200).json(events);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getEvents,
  postNewEvent,
  deleteEvent,
  getEventsByID,
  modifyEvent,
};
