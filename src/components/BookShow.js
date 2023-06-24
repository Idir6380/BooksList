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
    const hundleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };


    let content = <h3>{book.title}</h3>

    if (showEdit) {
        content = <BookEdit onSubmit={hundleSubmit} book={book} />
    }
    return (

        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
            <div>
                {content}
            </div>
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