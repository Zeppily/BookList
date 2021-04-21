/* eslint-disable */
let chai = require('chai');
let server = require('../index');
let chaiHttp = require('chai-http');
const { response } = require('express');

chai.should();
chai.use(chaiHttp);

describe('Testing the books endpoints', () => {

    describe('Test POST route /api/books with valid object', () => {        
        it('should return the succesfully posted book', (done) => {
            chai.request(server)
                .post('/api/books')
                .send({
                    'author': 'Haruki Murakami',
                    'title': 'Sputnik Sweetheart',
                    'description': 'Fiction, Culture, Realism, Romance'
                })
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.data.should.be.a('object');
                    done();
                });
        });
    })

    describe('Test GET route /api/books', () => {
        it('should return all books', (done) => {
            chai.request(server)
                .get('/api/books')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.data.should.be.a('array');
                    done();
                });
        });
    });

    describe('Test PUT route /api/books/:id with valid object', () => {
        it('should return success message', (done) => {
            chai.request(server)
                .put('/api/books/1')
                .send({
                    'author': 'Haruki Murakami',
                    'title': 'Kafka on the Shore',
                    'description': 'Metaphysical reality'
                })
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('message').eq('Book was sucessfully updated');
                    done();
                });
        });
    });

    describe('Test DELETE route /api/books/:id' , () => {
        it('should return success message', (done) => {
            chai.request(server)
                .delete('/api/books/1')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('message').eq('Book was sucessfully deleted');
                    done();
                });
        });
    });

    describe('Test Wrong Route' , () => {
        it ('should return error message', (done) => {
            chai.request(server)
                .get('/api/wrong')
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.should.have.property('message').eq('Invalid endpoint or method');
                    done();
                });
        });

    });

    describe('Test DELETE route /api/book/:id with wrong id', () => {
        it('should return error message', (done) => {
            chai.request(server)
                .delete('/api/books/9001')
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.should.have.property('message').eq('Book was not found');
                    done();
                });
        });
    });

    describe('Test POST route /api/book/ with invalid object', () => {
        it('should return error message', (done) => {
            chai.request(server)
                .post('/api/books')
                .send({
                    'author': 'Jules Verne',
                    'title': ''
                })
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.should.have.property('message').eq('Invalid Object was passed, include all details');
                    done();
                });
        });
    });

    describe('Test PUT route /api/book/:id with wrong id', () => {
        it('should return error message', (done) => {
            chai.request(server)
                .put('/api/books/9001')
                .send({
                    'author': 'Jules Verne',
                    'title': 'Around the World in 80 Days'
                })
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.should.have.property('message').eq('Book was not found');
                    done();
                });
        });
    });

    describe('Test PUT route /api/book/:id with invalid object', () => {
        it('should return error message', (done) => {
            chai.request(server)
                .put('/api/books/1')
                .send({
                    'author': 'Aldous Huxley',
                    'title': ''
                })
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.should.have.property('message').eq('Invalid Object was passed, include all details');
                    done();
                });
        });
    });

});
