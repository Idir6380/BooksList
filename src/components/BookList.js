import BookShow from "./BookShow";
function BookList({ books }) {
    return (
        <div className="book-list">
            {books.map(book => {
                return <BookShow key={book.id} book={book} />
            })}
        </div>
    );
}
export default BookList;