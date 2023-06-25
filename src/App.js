import BookCreate from "./components/BookCreate";
import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import axios from "axios";
const App = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://127.0.0.1:3001/books');
        setBooks(response.data);
    };






    useEffect(() => {
        fetchBooks();
    }, []);

    const hundleCreate = async (bookTitle) => {
        const response = axios.post('http://127.0.0.1:3001/books', {
            bookTitle,
        });
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    const hundleDelete = async (id) => {
        await axios.delete(`http://127.0.0.1:3001/books/${id}`);
        setBooks(books.filter(book => {
            return book.id !== id;
        }));
    };

    const hundleEdit = async (id, title) => {
        const reponse = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
            title: title,
        });
        setBooks(books.map(book => {
            if (book.id === id) {
                return { ...book, ...reponse.data };
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