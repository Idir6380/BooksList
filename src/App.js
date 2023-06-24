import BookCreate from "./components/BookCreate";
import { useState } from "react";
import BookList from "./components/BookList";

const App = () => {
    const [books, setBooks] = useState([]);
    const hundleCreate = bookTitle => {
        const book = {
            id: Math.round(Math.random() * 9999),
            title: bookTitle
        };

        setBooks([...books, book]);
    };
    const hundleDelete = (id) => {
        setBooks(books.filter(book => {
            return book.id !== id;
        }))
    };
    const hundleEdit = (id, title) => {
        setBooks(books.map(book => {
            if (book.id === id) {
                return { ...book, title: title };
            }
            return book;
        }))
    };
    return (

        <div
            className="app">
            <h1>Reading List</h1>
            <BookList onDelete={hundleDelete} books={books} onEdit={hundleEdit} />
            <BookCreate onCreate={hundleCreate} />
        </div>
    );
};
export default App; 