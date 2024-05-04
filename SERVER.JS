const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Perform additional validation if needed

    // Prepare CSV data
    const csvData = `${name},${email},${message}\n`;

    // Append data to CSV file
    fs.appendFile('data.csv', csvData, (err) => {
        if (err) {
            console.error('Error writing to CSV file:', err);
            res.status(500).send('Error writing to CSV file');
        } else {
            console.log('Data appended to CSV file');
            res.status(200).send('Form data saved successfully!');
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
