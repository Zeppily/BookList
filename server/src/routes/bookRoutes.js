import Router from 'express';
import bookController from '../controllers/bookController';

const router = Router();

router.get('/', bookController.getAllBooks);
router.post('/', bookController.addBook);

export default router;
