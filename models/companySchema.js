const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyName1: {
    type: String,
    required: true,
    default: `${this.companyName}1`,
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
  signed: {
    type: Boolean,
    default: false,
  },
  noWebsite: {
    type: Boolean,
  },
  averageSalePrice: {
    type: Number,
  },
  conversionRate: {
    type: Number,
  },
  conversionOfLeads: {
    type: Number,
  },
  numberOfLeads: {
    type: Number,
  },
  ipAddress: {
    type: String,
  },
  signatureText: {
    type: String,
  },
  signatureImage: {
    type: String,
  },
  analyze: {
    type: Boolean,
    default: false,
  },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
