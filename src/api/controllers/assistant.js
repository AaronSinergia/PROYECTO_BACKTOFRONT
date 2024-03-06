const { generateSign } = require('../../config/jwt');
const Assistant = require('../models/assistant');
const bcrypt = require('bcrypt');

const registerAssistant = async (req, res, next) => {
  try {
    const newAssistant = new Assistant({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      eventsAssisted: req.body.eventsAssisted,
    });

    const assistantDuplicated = await Assistant.findOne({
      name: req.body.name,
    });

    if (assistantDuplicated) {
      return res.status(400).json('Ese nombre de usuario ya existe');
    }

    const assistantSaved = await newAssistant.save();

    return res.status(201).json(assistantSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const loginAssistant = async (req, res, next) => {
  try {
    const assistant = await Assistant.findOne({ name: req.body.name });

    if (assistant) {
      if (bcrypt.compareSync(req.body.password, assistant.password)) {
        const token = generateSign(assistant._id);
        return res.status(200).json({ assistant, token });
      } else {
        return res
          .status(400)
          .json('El usuario o la contraseña són incorrectos');
      }
    } else {
      return res.status(400).json('El usuario o la contraseña són incorrectos');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteAssistant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const assistantDeleted = await Assistant.findByIdAndDelete(id);

    return res.status(200).json({
      message: 'User Already Deleted',
      assistantDeleted,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getAssistant = async (req, res, next) => {
  try {
    const assistants = await Assistant.find();
    return res.status(200).json(assistants);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getAssistantByID = async (req, res, next) => {
  const { id } = req.params;
  try {
    const assistants = await Assistant.findById(id);
    return res.status(200).json(assistants);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  registerAssistant,
  loginAssistant,
  deleteAssistant,
  getAssistant,
  getAssistantByID,
};
