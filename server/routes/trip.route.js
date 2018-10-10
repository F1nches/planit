const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const tripController = require('../controllers/trip.controller');

//API Routes
router.post('/create', checkAuth, tripController.tripCreate);
router.put('/:id/update', tripController.tripUpdate);
router.get('/:id', tripController.tripDetails);
router.delete('/:id/delete', tripController.tripDelete);

//API User+Trip routes
router.get('/:author/all', checkAuth, tripController.userTrips);

//Export router
module.exports = router;
