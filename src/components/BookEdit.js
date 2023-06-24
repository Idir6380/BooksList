import { useState } from "react";
function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const hundleChange = e => {
        setTitle(e.target.value);

    };
    const hundleEdit = e => {

        e.preventDefault();
        onSubmit(book.id, title);
    };
    return (
        <form className="book-edit" onSubmit={hundleEdit}>
            <label>
                Title:
            </label>
            <input className="input" onSubmit={hundleEdit} value={title} onChange={hundleChange} />            <button className="button is-primary" type="submit">
                save
            </button>
        </form>
    );
}
export default BookEdit;