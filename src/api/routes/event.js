const { isAdmin, isAssistant } = require('../../middlewares/auth');
const upload = require('../../middlewares/file');
const {
  getEvents,
  getEventsByUSERID,
  postNewEvent,
  deleteEvent,
  modifyEvent,
  addAssistantToEvent,
} = require('../controllers/event');

const eventsRoutes = require('express').Router();

eventsRoutes.get('/', getEvents);
eventsRoutes.get('/:id', getEventsByUSERID);
eventsRoutes.post('/', postNewEvent);
eventsRoutes.put('/newAssistant/:id', addAssistantToEvent);
eventsRoutes.put(
  '/:id',
  upload.single('img'),
  [isAssistant],
  [isAdmin],
  modifyEvent
);
eventsRoutes.delete('/:id', [isAdmin], deleteEvent);

module.exports = eventsRoutes;
