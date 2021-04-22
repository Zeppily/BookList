import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

export default function EditBook(props) {
    const [open, setOpen] = React.useState(false);
    const [book, setBook] = useState({
        title: '',
        author: '',
        description: '',
    });
    const [tempBook, setTempBook] = useState({
        title: '',
        author: '',
        description: '',
    });

    useEffect(() => {
        if(tempBook.title !== props.book.title || tempBook.author !== props.book.author ){
            setBook(props.book);
            setTempBook(props.book);
        }        
      }, [tempBook.title, tempBook.author, props.book]);

    const handleSave = () => {
        if (book.author && book.title) {
            props.updateBook(book);
        } else {
            setOpen(true);
        }
    };

    const handleSaveNew = () => {
        if (book.author && book.title) {
            props.addBook(book);
        } else {
            setOpen(true);
        }
    };

    const handleClose = (event, reason) => {
        setOpen(false);
      };


    const inputChanged = (event) => {
        setBook({ ...book, [event.target.name]: event.target.value });
    };


    return (
        <div>
            <TextField id='filled-basic' name='title' label='Title'  style={{ width: 600 }}
                    variant='filled' value={book.title} onChange={event => inputChanged(event)}/><br />
            <TextField id='filled-basic' name='author'label='Author'  style={{ width: 600 }}
                    variant='filled' value={book.author} onChange={event => inputChanged(event)}/><br />
            <TextField id='filled-basic'  name='description' label='Description' style={{ width: 600, marginBottom: 20 }}
                    variant='filled' value={book.description} onChange={event => inputChanged(event)}
                    multiline rows='3'/><br />

            <Button onClick={handleSave} variant='outlined' color='primary'> Save </Button>
            <Button onClick={handleSaveNew} variant='outlined' color='primary'> Save New </Button>
            <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}
              message="Can't save a book without a title and an author!"
            />
        </div>
    );
}
