import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navClass = ({ isActive }) =>
  `nav-item nav-link${isActive ? " active" : ""}`;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isAboutActive = location.pathname === "/about";

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`container-fluid fixed-top${isScrolled ? " bg-white shadow" : ""}`}
      style={{ top: isScrolled ? "-45px" : "0" }}
    >
      <div className="container topbar d-none d-lg-block">
        <div className="topbar-inner">
          <div className="row gx-0">
            <div className="col-lg-7 text-start">
              <div className="h-100 d-inline-flex align-items-center me-4">
                <span className="fa fa-phone-alt me-2 text-dark"></span>
                <a href="mailto:isnnsummah@gmail.com" className="text-secondary">
                  <span>Contact by email</span>
                </a>
              </div>
              <div className="h-100 d-inline-flex align-items-center">
                <span className="far fa-envelope me-2 text-dark"></span>
                <a href="mailto:isnnsummah@gmail.com" className="text-secondary">
                  <span>isnnsummah@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 text-end">
              <div className="h-100 d-inline-flex align-items-center">
                <span className="text-body">Follow Us:</span>
                <a className="text-dark px-2" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-dark px-2" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-dark px-2" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="text-body ps-4" href="#">
                  <i className="fa fa-hands-helping text-dark me-1"></i> Community Updates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className={`navbar navbar-light navbar-expand-lg py-3${isScrolled ? " bg-white" : ""}`}>
          <NavLink to="/" className="navbar-brand">
            <div className="d-flex align-items-center">
              <img
                src="/img/isnns-logo.png"
                alt="ISNNS logo"
                style={{ height: "52px", width: "52px", objectFit: "contain" }}
                className="me-2"
              />
              <h1 className="mb-0">
                ISNNS <span className="text-primary">Ummah</span>
              </h1>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
            <div className="navbar-nav ms-lg-auto mx-xl-auto">
              <NavLink to="/" className={navClass} end>
                Home
              </NavLink>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className={`nav-link dropdown-toggle${isAboutActive ? " active" : ""}`}
                  data-bs-toggle="dropdown"
                >
                  About
                </a>
                <div className="dropdown-menu m-0 rounded-0">
                  <Link to="/about#who-we-are" className="dropdown-item">
                    Who we are
                  </Link>
                  <Link to="/about#how-we-started" className="dropdown-item">
                    How we started
                  </Link>
                  <Link to="/about#mission" className="dropdown-item">
                    Mission
                  </Link>
                  <Link to="/about#vision" className="dropdown-item">
                    Vision
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className={`nav-link dropdown-toggle${isAboutActive ? " active" : ""}`}
                  data-bs-toggle="dropdown"
                >
                  Events & Gatherings
                </a>
                <div className="dropdown-menu m-0 rounded-0">
                  <Link to="/activity" className="dropdown-item">
                    Azkar Gathering
                  </Link>
                  <Link to="/activity" className="dropdown-item">
                    Ramadan Lectures
                  </Link>
                  <Link to="/activity" className="dropdown-item">
                    Assistance to Nigeran International Students in Nova Scotia during Ramadan
                  </Link>
                  <Link to="/activity" className="dropdown-item">
                    Eid-Il-Adha Celebration
                  </Link>
                </div>
              </div>
              <NavLink to="/event" className={navClass}>
                Woman
              </NavLink>
              <NavLink to="/sermon" className={navClass}>
                Youth
              </NavLink>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Pages
                </a>
                <div className="dropdown-menu m-0 rounded-0">
                  <NavLink to="/blog" className="dropdown-item">
                    Lectures
                  </NavLink>
                  <NavLink to="/team" className="dropdown-item">
                    Gallery
                  </NavLink>
                  <NavLink to="/testimonial" className="dropdown-item">
                    Mosques in NS
                  </NavLink>
                  <NavLink to="/404" className="dropdown-item">
                    Islamic schools in NS
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className={navClass}>
                Contact
              </NavLink>
            </div>
            <a
              href="mailto:isnnsummah@gmail.com?subject=ISNNS%20Monthly%20Contribution"
              className="btn btn-primary py-2 px-4 d-none d-xl-inline-block"
            >
              Donate Now
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
