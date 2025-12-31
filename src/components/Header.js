import React, { useState } from 'react';

export default function HeaderSection({ background, logo, navLinks, cta, themeToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="header"
      className="header py-3 d-flex align-items-center fixed-top"
      style={{ background }}
    >
      <div style={{height: '38px'}} className="container-xxl px-lg-5 position-relative d-flex align-items-center justify-content-between">
        <div>
          <a href={logo.url} style={{textDecoration: 'none'}} className="logo d-flex align-items-center mx-auto mx-lg-0">
            <span className="h4 mb-0 fw-bold" style={{ color: logo.textColor }}>
              {logo.text}
            </span>
          </a>
        </div>

        {/* <nav id="navmenu" className="navbar ms-auto">
          <ul>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.url} target="_self">
                  {link.icon && <i className={`fas fa-${link.icon} me-1`}></i>}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <i className="mobile-nav-toggle d-inline-block d-lg-none fa fa-bars"></i>
        </nav> */}
        <nav id="navmenu" className={`navbar ms-auto ${isOpen ? "open" : ""}`}>
      <ul>
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <a href={link.url} onClick={() => setIsOpen(false)}>
              {link.icon && (
                <i className={`fas fa-${link.icon} me-1`}></i>
              )}
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <i
        className="mobile-nav-toggle d-inline-block d-lg-none fa fa-bars"
        onClick={() => setIsOpen(!isOpen)}
      ></i>
    </nav>

        <div className="d-none d-lg-flex align-items-center">
          {themeToggle?.enabled && (
            <button className="bg-transparent text-white border-0 me-3 fs-5" id="themeToggleButton">
              <i className={`bi bi-${themeToggle.icon}`}></i>
            </button>
          )}
          <a className={`btn btn-${cta.variant}`} href={cta.url}>
            {cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}