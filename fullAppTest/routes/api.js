var express = require('express');
var router = express.Router();

var Data     = require('../model/data');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/data', function(req, res, next) {
	Data.find(function(err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
});

router.post('/data', function(req, res, next) {
	var data = new Data();
	data.temperature = req.body.temperature;
    data.temperatureUnit = req.body.temperatureUnit;
    data.pressure = req.body.pressure;
    data.pressureUnit = req.body.pressureUnit;
    data.altitude = req.body.altitude;
    data.altitudeUnit = req.body.altitudeUnit;

    data.save(function(err) {
    	if (err)
    		res.send(err);
        res.json({ message: 'Data created!' });
    });
});

module.exports = router;
