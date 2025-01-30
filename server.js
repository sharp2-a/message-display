const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, if you are reading this, sparxreader.onrender.com has shut down. This is probably due to the fact it got too popular and I had to shut it down. Thank you for playing SPARXREADER. Many thanks, the SparxReader.Onrender team.');
});

app.listen(PORT, () => {
    console.log(`Message is displayed to all users of the old juststudy website.`);
});
