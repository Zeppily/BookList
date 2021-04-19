const getAllBooks = async (_, res) => {
    try {
        res.status(200).send('hello');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const addBook = async (req, res) => {
    if (!req.body.isbn || !req.body.author || !req.body.title || !req.body.description) {
        res.status(400).send('Invalid Object was passed, include all required details');
    } else {
        try {
            res.status(200).json(req.body);
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
