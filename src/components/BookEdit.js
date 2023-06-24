import { useState } from "react";
function BookEdit({ book, onEdit }) {
    const [title, setTitle] = useState(book.title);
    const hundleChange = e => {
        setTitle(e.target.value);

    };
    const hundleEdit = e => {
        onEdit(book.id, title);
        e.preventDefault();
    };
    return (
        <form className="book-edit" onSubmit={hundleEdit}>
            <label>
                Title:
            </label>
            <input onSubmit={hundleEdit} value={title} onChange={hundleChange} />            <button className="button is primary" type="submit">
                save
            </button>
        </form>
    );
}
export default BookEdit;