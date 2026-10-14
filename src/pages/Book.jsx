import books from "../Utils/books";

function Book() {
  return (
    <div>
      <section className="page-header">
        <p>OUR COLLECTION</p>
        <h1>Daftar Buku 📚</h1>
        <span>{books.length} buku tersedia</span>
      </section>

      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <div className="book-icon">📖</div>

            <div className="book-info">
              <span className="book-number">
                BOOK #{String(book.id).padStart(2, "0")}
              </span>

              <h3>{book.title}</h3>

              <p className="author">
                ✍️ {book.author}
              </p>

              <div className="book-bottom">
                <p className="price">
                  Rp {book.price.toLocaleString("id-ID")}
                </p>

                <button className="detail-button">
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;