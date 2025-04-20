import { NavLink } from 'react-router-dom';
import './Navbar.css'; // 👈 Add this for custom styles

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top custom-navbar">
      <div className="container">

        {/* Logo + Brand */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.CoLVs7_t2eubh3oy8QMJfAHaBz&pid=Api&rs=1&c=1&qlt=95&w=508&h=123"
            alt="Lakshavedh Logo"
            height="40"
            className="me-2 rounded"
          />
          <span className="fw-bold fs-5">Lakshavedh Academy</span>
        </NavLink>

        {/* Mobile Toggle */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Courses', path: '/courses' },
              { name: 'Contact', path: '/contact' }
            ].map((link, i) => (
              <li className="nav-item" key={i}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link px-3 ${isActive ? 'active-link' : ''}`
                  }
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
