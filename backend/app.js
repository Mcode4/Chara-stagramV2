import express from 'express';
import cors from 'cors';
import routes from 'routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 9998;

if(process.env.NODE_ENV === 'production'){
    app.use(cors());
};

app.use(express.json());
app.use(routes); // Register routes







app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;