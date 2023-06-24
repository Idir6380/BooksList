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
    return (
        <div className="app">
            <BookList onDelete={hundleDelete} books={books} />
            <div>{books.length}</div>
            <BookCreate onCreate={hundleCreate} />
        </div>
    );
};
export default App; 