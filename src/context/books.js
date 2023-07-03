import { createContext, useCallback } from "react";
import { useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://127.0.0.1:3001/books');
        setBooks(response.data);
    }, [])



    const hundleCreate = async (bookTitle) => {
        const response = await axios.post('http://127.0.0.1:3001/books', {
            title: bookTitle,
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

    const valueToShare = {
        books,
        hundleDelete,
        hundleEdit,
        hundleCreate,
        fetchBooks
    };

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export default BooksContext;
export { Provider };