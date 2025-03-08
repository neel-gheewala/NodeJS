const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let messages = [];

app.get('/', (req, res) => {
    res.send('Welcome to the Advanced Node.js App!');
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.post('/messages', (req, res) => {
    const message = req.body.message;
    if (message) {
        messages.push(message);
        res.status(201).json({ success: true, message: 'Message added successfully' });
    } else {
        res.status(400).json({ success: false, error: 'Message is required' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
