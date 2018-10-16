const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const tripController = require('../controllers/trip.controller');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
    cb(null, true);
  } else {
    //Can replace null with error here if decide to throw an error instead of just not saving
    cb(null, false);
  }
}

//Store images here
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2
  },
  fileFilter: fileFilter
});

//API Routes
router.post('/create', checkAuth, upload.single('tripImage'), tripController.tripCreate);
router.put('/:id/update', tripController.tripUpdate);
router.get('/:id/view', tripController.tripDetails);
router.delete('/:id/delete', tripController.tripDelete);

//API User+Trip routes
// router.get('/:author/all', checkAuth, tripController.userTrips);
router.get('/all', checkAuth, tripController.userSpecificTrips);


//Return random travel quote
router.get('/quote', tripController.quote);

//Export router
module.exports = router;
