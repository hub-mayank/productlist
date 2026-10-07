const express = require('express');
const app = express();
const cors = require('cors');
const products = require('./data.js');


app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
    res.json(products);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
