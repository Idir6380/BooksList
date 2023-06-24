import BookShow from "./BookShow";
function BookList({ books, onDelete, onEdit }) {
    return (
        <div className="book-list">
            {books.map(book => {
                return <BookShow onDelete={onDelete} onEdit={onEdit}
                    key={book.id} book={book} />
            })}
        </div>
    );
}
export default BookList;