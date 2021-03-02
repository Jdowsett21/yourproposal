const express = require('express');
const router = express.Router();
const Company = require('../models/companySchema');
const puppeteer = require('puppeteer');
const fs = require('fs');
router.get('/:companyName', async (req, res) => {
  const company = await Company.find({ companyName: req.params.companyName });
  res.send(company);
});

router.post('/', async (req, res) => {
  const company = new Company({
    ...req.body,
  });

  let fileContent = `
    import React from 'react';
  import Index from './index.js';
  function ${req.body.companyName}() {
    return <Index/>;
  }

  export default ${req.body.companyName};
  `;

  let filepath = `./client/pages/${req.body.companyName}.js`;

  fs.writeFile(filepath, fileContent, (err) => {
    {
      if (err) throw err;
      console.log('file was created');
    }
  });

  let fileContent1 = `
  import React from 'react';
  import Pdf from './pdf.js';
  function ${req.body.companyName}1() {
  return <Pdf/>;
  }

  export default ${req.body.companyName}1;
  `;

  let filepath1 = `./client/pages/${req.body.companyName}1.js`;

  fs.writeFile(filepath1, fileContent1, (err) => {
    {
      if (err) throw err;
      console.log('file was created');
    }
  });

  await company.save();

  res.send(company);
});
router.put('/analyze/:companyName', async (req, res) => {
  const company = await Company.findOneAndUpdate(
    { companyName: req.params.companyName },
    {
      analyze: !req.body.analyze,
    }
  );

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
  const name = req.params.companyName.replace(/\s+/g, '_');

  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto(`http://localhost:3000/${name}1`, {
    waitUntil: 'networkidle2',
  });

  const pdf = await page.pdf({ path: 'hn.pdf', format: 'a4' });

  await browser.close();

  res.set({
    'Content-Type': 'application/pdf',
    'Content-Length': pdf.length,
  });
  res.send(pdf);
});
module.exports = router;
