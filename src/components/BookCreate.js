import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const hundleChange = e => {
        setTitle(e.target.value);
    };
    const hundleSubmit = e => {
        e.preventDefault();
        if (title !== "") {
            onCreate(title);
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