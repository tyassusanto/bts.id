const express = require('express')
const route = express.Router()
const authController = require('../../controllers/auth/auth')
const checklistController = require('../../controllers/checklist/checklist')
const middlewere = require('../../common/authentications')

// Auth Routes
route.post(`/login`, authController.login)
route.post(`/register`, authController.register)

// Checklist Routes
route.post(`/checklist`, middlewere.verifToken, checklistController.addGroup)
route.get(`/checklist`, middlewere.verifToken, checklistController.getAllGroup)
route.delete(`/checklist/:id`, middlewere.verifToken, checklistController.deleteGroupById)

// Checklist Item Routes
route.post(`/checklist/:id`,  middlewere.verifToken, checklistController.addItem)

module.exports = route