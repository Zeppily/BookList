import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import EditBook from './EditBook';

export default function BookList(props) {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({
        id: '',
        title: '',
        author: '',
        description: '',
    });

    const getBooks = () => {
        fetch('http://localhost:8000/api/books')
            .then((response) => response.json())
            .then((responseData) => {
                setBooks(responseData.data);
            })
            .catch((err) => console.log(err));
        clearFields();
    };

    const clearFields = () => {
        setBook({
            title: '',
            author: '',
            description: '',
        });
    };

    useEffect(() => {
        getBooks();
    }, []);

    const deleteBook = (book) => {
        if (window.confirm(`Are you sure you want to delete ${book.author}'s ${book.title} ?`)){
            fetch(`http://localhost:8000/api/books/${book.id}`, {
                method: 'DELETE'
            })
            .then(_ => getBooks())
            .catch(error => console.error(error));
        }
    };

    const addBook = (book) => {
        fetch(`http://localhost:8000/api/books`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        })
        .then(_ => getBooks())
        .catch(error => console.error(error));
    };

    const updateBook = (book) => {
        fetch(`http://localhost:8000/api/books/${book.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        })
        .then(_ => getBooks())
        .catch(error => console.error(error));
    };

    const handleEdit = (bookSelected) => {
        setBook(bookSelected);
    };

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <EditBook addBook={addBook} updateBook={updateBook} book={book} /> 
                </Grid>
                <Grid item xs={6}>
                    <Table size='small' style={{marginTop: 20}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Author</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {books.map((book) => (
                                <TableRow key={book.id} >
                                    <TableCell>{book.title}</TableCell>
                                    <TableCell>{book.author}</TableCell>
                                    <TableCell>
                                        <Button variant='contained' color='primary' onClick={() => handleEdit(book)} > Edit </Button>                             
                                        <Button variant='contained' color='secondary' onClick={() => deleteBook(book)} > Delete </Button>                                
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid> 
        </div>
    );
}
