var Doctor = require("../models/doctor").Doctor;

exports.insertDummyDoctor = function() {
  var doctor = new Doctor ({
    first_name: "Omar",
    last_name: "Ashraf",
    email: "omar.ashraf@hotmail.com",
    password: "password",
    mobile: "012",
    landline: "02",
    address: "27 street st.",
    city: "Cairo",
    governorate: "Cairo"
  });

  doctor.save((err) => {
    if (err) throw err;
    console.log("Dummy user inserted successfully!");
  });

  return doctor;
}
