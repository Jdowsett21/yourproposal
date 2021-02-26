const express = require('express');
const router = express.Router();
const Company = require('../models/companySchema');
const puppeteer = require('puppeteer');
router.get('/:companyName', async (req, res) => {
  const company = await Company.find({ companyName: req.params.companyName });
  res.send(company);
});

router.post('/', async (req, res) => {
  const company = new Company({
    ...req.body,
  });

  await company.save();

  res.send(company);
});

router.put('/:companyName', async (req, res) => {
  const company = await Company.findOneAndUpdate(
    { companyName: req.params.companyName },
    {
      signatureText: req.body.signatureText,
      signatureImage: req.body.signatureImage,
      date: Date.now(),
      ipAddress: req.ip,
    },
    { new: true }
  );

  res.send(company);
});

router.get('/download/:companyName', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:3000/${req.params.companyName}`, {
    waitUntil: 'networkidle0',
  });
  // await page.addStyleTag({
  //   // content:
  //   //   '.nav { display: none} .navbar { border: 0px} #print-button {display: none}',
  // });
  const pdf = await page.pdf({ path: 'hn.pdf', format: 'a4' });

  await browser.close();

  res.set({
    'Content-Type': 'application/pdf',
    'Content-Length': pdf.length,
  });
  res.attach(pdf);
});
module.exports = router;
