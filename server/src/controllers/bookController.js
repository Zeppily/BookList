const { Book } = require('../models/Book');

const getAllBooks = async (_, res) => {
    try {
        const books = await Book.query();
        res.status(200).send(books);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const addBook = async (req, res) => {
    if (!req.body.author || !req.body.title) {
        res.status(400).send('Invalid Object was passed, include all required details');
    } else {
        try {
            const book = await Book.query().insert({
                author: req.body.author,
                title: req.body.title,
                description: req.body.description,
            });
            res.status(200).json(book);
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }
};

module.exports = {
    getAllBooks,
    addBook,
};
