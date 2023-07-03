import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { hundleEdit } = useBooksContext();

    const hundleChange = e => {
        setTitle(e.target.value);

    };
    const hundleSubmit = e => {

        e.preventDefault();
        onSubmit();
        hundleEdit(book.id, title);
    };
    return (
        <form className="book-edit" onSubmit={hundleSubmit}>
            <label>
                Title:
            </label>
            <input className="input" onSubmit={hundleSubmit} value={title} onChange={hundleChange} />            <button className="button is-primary" type="submit">
                save
            </button>
        </form>
    );
}
export default BookEdit;