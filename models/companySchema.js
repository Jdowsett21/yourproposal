const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  color1: {
    type: String,
    required: false,
  },
  color2: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  ipAddress: {
    // type: Number,
  },
  signatureText: {
    type: String,
  },
  signatureImage: {
    type: String,
  },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
