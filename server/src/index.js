import express from 'express';
import Knex from 'knex';
import { Model } from 'objection';
import bookRoutes from './routes/bookRoutes';
import knexConfig from './knexfile';

const knex = Knex(knexConfig.development);

Model.knex(knex);

const app = express();

app.use(express.json());

app.use('/api/books', bookRoutes);

const port = 8000;
app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});
