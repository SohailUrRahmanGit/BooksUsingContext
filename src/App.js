import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BooksList from './components/BookList';
function App() {
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
      const updatedBooks = books.filter((book) => {
        return book.id != id;
      });

      setBooks(updatedBooks);
    }
    
    const createBook = (title) => {
      const updateBooks = [...books, { id: Math.random() * 999, title }]
      setBooks(updateBooks);
    };


    return (
    <div className="app"> 
    <BooksList books={books} onDelete={deleteBookById} />
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