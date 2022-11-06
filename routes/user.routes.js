const express = require('express');

// create our router from express.Router
const router = express.Router();

// bring in our controller that has the business logic for our user routes
const userController = require('../controllers/user.controller');

// route for getting all the users
router.get('/', userController.findAll);

// route for getting one user
router.get('/:userid', userController.findById);

// route for deleting one user
router.delete('/:userid', userController.deleteById);

// route for creating a new user
router.post('/', userController.create);

// update
//router.put('/:userid', userController.updateById);
// use object.assign in the controller


module.exports = router;