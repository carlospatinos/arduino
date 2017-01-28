var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


//{"temperature": "18.50", "pressureUnit": "millibars", "altitude": "196.32", "temperatureUnit": "Celcius", "pressure": "989.89", "altitudeUnit": "meters"}
var DataSchema   = new Schema({
    temperature: Number,
    temperatureUnit: String,
    pressure: Number,
    pressureUnit: String,
    altitude: Number,
    altitudeUnit: String,
    created_at: Date,
    updated_at: Date
});

DataSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = mongoose.model('Data', DataSchema);