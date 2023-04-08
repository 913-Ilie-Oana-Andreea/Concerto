const locationModel = require('../models/location.js');

module.exports = (app) => {
    const Controller = require('../controllers/locationController.js');
    Controller.populate();
    app.get('/location/getAllLocations', Controller.getAllLocations);
    app.get('/location/getLocationByID/:ID', Controller.getLocationByID);
    app.post('/location/addLocation', Controller.addLocation);
    app.delete('/location/deleteLocation/:ID', Controller.deleteLocation);
    app.put('/location/updateLocation/:ID', Controller.updateLocation);
    app.get('/location/filterByCapacity/:capacity', Controller.filterByCapacity);
}