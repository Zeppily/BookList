import './App.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <AppBar position='static' style={{marginBottom: 50}}>
        <Toolbar>
          <Typography variant='h4'>
            Simple Book List
          </Typography>
        </Toolbar>
      </AppBar>
      <BookList />
    </div>
  );
}

export default App;
