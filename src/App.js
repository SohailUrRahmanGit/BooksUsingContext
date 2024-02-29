import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BooksList from './components/BookList';
function App() {
    const [books, setBooks] = useState([]);
    
    const editBookById = (id, newTitle) => {
      const updatedBooks = books.map((book) => {
        if (book.id === id) {
        return { ...book, title: newTitle};
        } 

        return book;
      });

      setBooks(updatedBooks);
    }
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
    <h1> Reading List </h1>
    <BooksList onEdit={editBookById} books={books} onDelete={deleteBookById} />
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