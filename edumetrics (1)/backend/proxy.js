const express = require('express');
const request = require('request');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/proxy', (req, res) => {
  const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=D6RWwwGKLkL9ECBKyM6aS2lTFfJ6SeIG0GnBu62-Qfnd1Q4EKmkv-f0bd8pjgaEngqjyjKPJIZqLawXh7fl8CxHXWPhMnk-6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPX1Qhb94QRfehLGAP-xik_R5fGIdD4v5e2CYEc2c9btxsQa06Ctb8MGmIZaLIgqpVIUqLsCeBH1j2Hx4QPhFP45-a5ro6ss5tz9Jw9Md8uu&lib=M93TppizFl2rE0BzCAwZXtyQatYArmC3U'; // Replace with your URL
  request(url).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});