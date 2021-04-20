const { Model } = require('objection');

class Book extends Model {
    static get tableName() {
        return 'books';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['author', 'title'],
            properties: {
                author: { type: 'string', minLength: 1, maxLength: 255 },
                title: { type: 'string', minLength: 1, maxLength: 255 },
                description: { type: ['string', 'null'], maxLength: 255 },
            },
        };
    }
}

module.exports = {
    Book,
};
