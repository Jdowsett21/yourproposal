const cors = require('cors');
const cookieParser = require('cookie-parser');
const company = require('../routes/companyInfo');
const bodyParser = require('body-parser');

const express = require('express');
const helmet = require('helmet');
const path = require('path');
module.exports = function (app) {
  app.use(cookieParser());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(helmet());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/out'));
  }
  app.use('/api/company', company);

  app.get('/404', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../client', 'out', '404.html'),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
  app.get('/admin', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../client', 'out', 'admin.html'),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
  app.get('/Accepted', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../client', 'out', 'Accepted.html'),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../client', 'out', 'index.html'),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
};
