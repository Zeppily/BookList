import express from 'express';
import Knex from 'knex';
import { Model } from 'objection';
import bookRoutes from './routes/bookRoutes';
import knexConfig from './knexfile';

const knex = Knex(knexConfig.development);
const cors = require('cors');

Model.knex(knex);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use((_, res) => {
    res.status(404).json({ status: 404, message: 'Invalid endpoint or method' });
});

const port = 8000;
const server = app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});

module.exports = server;
