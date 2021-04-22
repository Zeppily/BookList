import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList';
import EditBook from '../components/EditBook';
import '@testing-library/jest-dom/extend-expect';

const book = {
  title: "hello",
  author: "world"
}

test('renders Booklist component', () => {
    render(<BookList />);
    const textElement = screen.getByText(/actions/i);
    expect(textElement).toBeInTheDocument();
  }); 

test('renders editBook component', () => {
  render(<EditBook book={book}/>);
  const textElement = screen.getByText(/Save New/i);
  expect(textElement).toBeInTheDocument();
}); 
