import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function EditBook(props) {
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
        props.updateBook(book);
    };

    const handleSaveNew = () => {
        props.addBook(book);
    };


    const inputChanged = (event) => {
        setBook({ ...book, [event.target.name]: event.target.value });
    };


    return (
        <div>
            <TextField id='filled-basic' margin='normal' name='title' label='Title'  style={{ width: 600 }}
                    variant='filled' value={book.title} onChange={event => inputChanged(event)}/><br />
            <TextField id='filled-basic' margin='normal' name='author'label='Author'  style={{ width: 600 }}
                    variant='filled' value={book.author} onChange={event => inputChanged(event)}/><br />
            <TextField id='filled-basic' margin='normal ' name='description' label='Description' style={{ width: 600 }}
                    variant='filled' value={book.description} onChange={event => inputChanged(event)}
                    multiline rows='3'/><br />

            <Button onClick={handleSave} color='primary'> Save </Button>
            <Button onClick={handleSaveNew} color='primary'> Save New </Button>
        </div>
    );
}
