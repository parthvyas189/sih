const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(bodyParser.json()); // Parse JSON requests

// Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Route to send SMS
app.post('/send-sms', (req, res) => {
  const { phoneNumber, message } = req.body;

  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER, // Twilio phone number
      to: phoneNumber, // User's phone number
    })
    .then((message) => {
      console.log(`Message sent: ${message.sid}`);
      res.status(200).send(`Message sent to ${phoneNumber}`);
    })
    .catch((error) => {
      console.error('Error sending SMS:', error);
      res.status(500).send('Failed to send message');
    });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
