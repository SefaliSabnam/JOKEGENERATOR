const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello, World! Your server is running on port 8080.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

