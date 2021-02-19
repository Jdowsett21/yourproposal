const cors = require('cors');
const cookieParser = require('cookie-parser');
const emails = require('../routes/emails');
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
  app.use('/api/emails', emails);

  if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'contact.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
  }
};
