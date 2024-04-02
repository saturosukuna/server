const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    // Here you can process the form data as needed
    res.json({ message: 'Form data received successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
