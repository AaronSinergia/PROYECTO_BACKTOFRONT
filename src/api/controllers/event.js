const { deleteFile } = require('../../utils/deleteFile');
const Assistant = require('../models/assistant');
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

const addAssistantToEvent = async (req, res, next) => {
  try {
    const { id } = req.params; // id del evento
    const userID = req.body.assistants;

    const event = await Event.findOne({
      _id: id,
      assistants: userID,
    });

    if (event) {
      alert('El usuario ya está como asistente al evento');
    } else {
      const eventUpdated = await Event.findByIdAndUpdate(
        id,
        {
          $push: { assistants: userID },
        },
        { new: true }
      );
      return res.status(200).json(eventUpdated);
    }
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

// const getEventsByUSERID = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const assistant = await Assistant.findById(id);
//     const events = await Event.findById(id);

//     return res.status(200).json(events);
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// };

const getEventsByUSERID = async (req, res, next) => {
  const { id, userID } = req.params;

  try {
    const event = await Event.findOne({
      _id: id,
      assistants: userID,
    });

    if (event) {
      return res.status(200).json({ isUserInEvent: true });
    } else {
      // El usuario no está en la lista de asistentes del evento
      return res.status(200).json({ isUserInEvent: false });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getEvents,
  postNewEvent,
  deleteEvent,
  getEventsByUSERID,
  modifyEvent,
  addAssistantToEvent,
};
