const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const message = req.body.message;
  if (message && message.text) {
    console.log('Received message: ', message.text);
    res.status(200).send('Message received');
  } else {
    res.status(400).send('Invalid message');
  }
});

app.listen(port, () => {
  console.log(`Webhook server is listening at http://localhost:${port}`);
});