const { isWorker, isAdmin } = require('../../middlewares/auth');
const {
  registerAssistant,
  loginAssistant,
  getAssistant,
  getAssistantByID,
} = require('../controllers/assistant');

const assistantsRoutes = require('express').Router();

assistantsRoutes.post('/register', registerAssistant);
assistantsRoutes.post('/login', loginAssistant);
assistantsRoutes.get('/', [isWorker], [isAdmin], getAssistant);
assistantsRoutes.get('/:id', [isWorker], [isAdmin], getAssistantByID);

module.exports = assistantsRoutes;
