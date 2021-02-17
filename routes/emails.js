const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  console.log('hello');
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: req.body.subject,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.send('contact-failure'); // Show a page indicating failure
    } else {
      res.send('contact-success'); // Show a page indicating success
    }
  });
});

router.post('/application', async (req, res) => {
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: `Position: ${req.body.position} from ${req.body.name}, `,
    text: `Contact Info: ${req.body.email},
    Cover Letter: ${req.body.coverLetter}`,
    // attachments: req.body.files,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.send('contact-failure'); // Show a page indicating failure
    } else {
      res.send('contact-success'); // Show a page indicating success
    }
  });
});

module.exports = router;
