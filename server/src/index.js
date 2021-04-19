import express from 'express';
import bookRoutes from './routes/bookRoutes';

const app = express();

app.use(express.json());
app.use('/api/books', bookRoutes);

app.listen(8000, () => {
    console.log('Listening on PORT 8000');
});
