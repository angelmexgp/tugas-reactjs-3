import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <p className="header-label">WELCOME TO</p>
          <h1>BOOK SALES</h1>
          <p className="header-subtitle">
            Temukan buku favoritmu di sini 📚
          </p>
        </div>
      </header>

      <nav className="navbar-custom">
        <div className="nav-container">
          <div className="brand">📚 BookSales</div>

          <div className="nav-menu">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/book"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Book
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>📚 Book Sales</p>
        <small>© 2026 Book Sales. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;