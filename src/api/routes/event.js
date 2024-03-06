const { isAdmin, isWorker } = require('../../middlewares/auth');
const upload = require('../../middlewares/file');
const {
  getEvents,
  getEventsByID,
  postNewEvent,
  deleteEvent,
  modifyEvent,
} = require('../controllers/event');

const eventsRoutes = require('express').Router();

eventsRoutes.get('/', getEvents);
eventsRoutes.get('/:id', getEventsByID);
eventsRoutes.post('/', [isWorker], postNewEvent);
eventsRoutes.put('/:id', upload.single('img'), [isWorker], modifyEvent);
eventsRoutes.put('/newAssistant/:id', [isWorker], [isAdmin], modifyEvent);
eventsRoutes.delete('/:id', [isAdmin], deleteEvent);

module.exports = eventsRoutes;
