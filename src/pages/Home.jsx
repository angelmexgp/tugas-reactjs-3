import books from "../Utils/books";

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div>
          <p className="hero-label">WELCOME, BOOK LOVERS ✨</p>
          <h1>Temukan Buku Favoritmu</h1>
          <p>
            Jelajahi koleksi buku pilihan kami dan temukan cerita
            yang ingin kamu baca.
          </p>

          <a href="/book" className="hero-button">
            Lihat Koleksi →
          </a>
        </div>

        <div className="hero-icon">📚</div>
      </section>

      <section className="books-section">
        <div className="section-title">
          <p>OUR COLLECTION</p>
          <h2>Buku Pilihan</h2>
        </div>

        <div className="book-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <div className="book-icon">📖</div>

              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">{book.author}</p>
                <p className="price">
                  Rp {book.price.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;