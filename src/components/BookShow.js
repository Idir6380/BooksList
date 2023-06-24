function BookShow({ book, onDelete }) {
    const hundleClick = () => {

        onDelete(book.id);
    };
    return (
        <div className="book-show">
            {book.title}
            <div className="actions">
                <button className="delete" onClick={hundleClick}>
                    delete
                </button>
            </div>
        </div>
    );
}
export default BookShow;