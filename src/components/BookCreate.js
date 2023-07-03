import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate() {

    const [title, setTitle] = useState('');
    const { hundleCreate } = useBooksContext();

    const hundleChange = e => {
        setTitle(e.target.value);
    };
    const hundleSubmit = e => {
        e.preventDefault();
        if (title !== "") {
            hundleCreate(title);
            setTitle('');
        }
    }
    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={hundleSubmit}>
                <label htmlFor="searchBar" >title</label>
                <input className="input" value={title} name="searchBar" type="text" onChange={hundleChange} />
                <input className="button" type="submit" value='Create new book!' />
            </form>
        </div>
    );
}
export default BookCreate;