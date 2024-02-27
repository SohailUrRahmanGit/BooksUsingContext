import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);
    
    const createBook = (title) => {
      const updateBooks = [...books, { id: 123, title: {title} }]
      setBooks(updateBooks);
    };


    return (
    <div> 
    <BookCreate onCreate={createBook} />
    </div>
    );
}

// function createBook() {

// }

// function editBook() {

// }

// function  deleteBook() {
    
// }

export default App;