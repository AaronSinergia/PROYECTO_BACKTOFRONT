const { isAssistant, isAdmin } = require('../../middlewares/auth');
const {
  registerAssistant,
  loginAssistant,
  getAssistant,
  getAssistantByID,
} = require('../controllers/assistant');

const assistantsRoutes = require('express').Router();

assistantsRoutes.post('/register', registerAssistant);
assistantsRoutes.post('/login', loginAssistant);
assistantsRoutes.get('/', [isAssistant], [isAdmin], getAssistant);
assistantsRoutes.get('/:id', [isAssistant], [isAdmin], getAssistantByID);

module.exports = assistantsRoutes;
