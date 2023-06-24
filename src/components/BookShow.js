import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    const hundleDeleteClick = () => {

        onDelete(book.id);
    };
    const hundleEditClick = () => {
        setShowEdit(!showEdit);
    };

    let content = <h3>{book.title}</h3>

    if (showEdit) {
        content = <BookEdit book={book} onEdit={onEdit} />
    }
    return (
        <div className="book-show">
            {content}
            <div className="actions">
                <button className="edit" onClick={hundleEditClick}>
                    edit
                </button>
                <button className="delete" onClick={hundleDeleteClick}>
                    delete
                </button>
            </div>
        </div>
    );
}
export default BookShow;