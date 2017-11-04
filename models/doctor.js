var mongoose = require("mongoose");

var DoctorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    lowercase: true
  },
  last_name: {
    type: String,
    lowercase: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String
  },
  mobile: {
    type: Number
  },
  landline: {
    type: Number
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  governorate: {
    type: String
  }
});

var Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = {
  Doctor: Doctor
}
