const { Book } = require('../models/Book');

const getAllBooks = async (_, res) => {
    try {
        const books = await Book.query();
        res.status(200).json({ status: 200, data: books });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

const addBook = async (req, res) => {
    if (!req.body.author || !req.body.title) {
        res.status(400).json({ status: 400, message: 'Invalid Object was passed, include all details' });
    } else {
        try {
            const book = await Book.query().insert({
                author: req.body.author,
                title: req.body.title,
                description: req.body.description,
            });
            res.status(200).json({ status: 200, data: book });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }
};

const updateBook = async (req, res) => {
    if (!req.body.author || !req.body.title) {
        res.status(400).json({ status: 400, message: 'Invalid Object was passed, include all details' });
    } else {
        try {
            const id = parseInt(req.params.id, 10);
            const numRows = await Book.query().findById(id).patch({
                author: req.body.author,
                title: req.body.title,
                description: req.body.description,
            });

            if (numRows) {
                res.status(200).json({ status: 200, message: 'Book was sucessfully updated' });
            } else {
                res.status(404).json({ status: 404, message: 'Book was not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: 'Internal Server Error' });
        }
    }
};

const deleteBook = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const numRows = await Book.query().deleteById(id);

        if (numRows) {
            res.status(200).json({ status: 200, message: 'Book was sucessfully deleted' });
        } else {
            res.status(404).json({ status: 404, message: 'Book was not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook,
};
