import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light header-custom">
        <div className="container">
          <a className="navbar-brand" href="#">Facebook</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#carousel">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#register">About Us</a>
              </li>
            </ul>
          </div>
        </div>
        <button className="btn btn-primary">
          <i data-feather="send"></i>
          Share
        </button>
      </nav>
    </header>
  );
};

export default Header;
