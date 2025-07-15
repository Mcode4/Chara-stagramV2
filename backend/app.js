const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 9999;

if(process.env.NODE_ENV === 'production'){
    app.use(cors());
};

app.use(express.json());
app.use(routes); // Register routes







app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;