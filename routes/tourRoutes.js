const express=require('express');
const tourController=require('../controllers/toursController');

const tourRouter=express.Router();

// tourRouter.param('id',tourController.checkID);

tourRouter.route('/top-5-cheap').get(tourController.aliasTopTours, tourController.getTours);
tourRouter.route('/').get(tourController.getTours).post(tourController.addTour);
tourRouter.route('/:id').get(tourController.getSingleTour).patch(tourController.updateTour).delete(tourController.deleteTour);

module.exports=tourRouter;