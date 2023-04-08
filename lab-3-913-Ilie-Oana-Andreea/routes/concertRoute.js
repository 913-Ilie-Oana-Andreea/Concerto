const concertModel = require('../models/concert.js');
const Controller = require("../controllers/concertController");
const ArtistConcertController = require("../controllers/artistConcertController");

module.exports = (app) => {
    const Controller = require('../controllers/concertController.js');
    Controller.populate();
    app.get('/concert/getAllConcerts', Controller.getAllConcerts);
    app.get('/concert/getConcertByID/:ID', ArtistConcertController.getConcertArtistsDetails);
    app.post('/concert/addConcert', Controller.addConcert);
    app.delete('/concert/deleteConcert/:ID', Controller.deleteConcert);
    app.put('/concert/updateConcert/:ID', Controller.updateConcert);
    //app.get('/concert/:ID/getArtistConcert', ArtistConcertController.getArtistConcertDetails)
    app.post('/concert/:ID/addArtist', ArtistConcertController.addArtistToConcert)
    app.delete('/concert/:concertID/deleteArtist/:artistID', ArtistConcertController.deleteArtistFromConcert)
    app.put('/concert/:concertID/updateArtist/:artistID', ArtistConcertController.updateArtistInConcert)
}