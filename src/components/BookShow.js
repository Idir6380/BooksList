import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { hundleDelete } = useBooksContext();

    const hundleDeleteClick = () => {

        hundleDelete(book.id);

    };

    const hundleEditClick = () => {
        setShowEdit(!showEdit);
    };
    const hundleSubmit = () => {
        setShowEdit(false);

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