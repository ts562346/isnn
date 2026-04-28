import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navClass = ({ isActive }) =>
  `nav-item nav-link${isActive ? " active" : ""}`;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const location = useLocation();
  const isAboutActive = location.pathname === "/about";
  const isEventsProgramsActive = location.pathname === "/activity";

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
                <a href="tel:+01234567890" className="text-secondary">
                  <span>+1 902 579 6177</span>
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
                <NavLink to="/about" className={`nav-link${isAboutActive ? " active" : ""}`}>
                  About
                </NavLink>
                <button
                  className={`nav-link dropdown-toggle dropdown-link-toggle${isAboutActive ? " active" : ""}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Toggle About menu"
                ></button>
                <div className="dropdown-menu m-0 rounded-0">
                  <Link to="/about#who-we-are" className="dropdown-item">
                    Who we are
                  </Link>
                  <Link to="/about#how-we-started" className="dropdown-item">
                    How we started
                  </Link>
                  <Link to="/about#our-mission" className="dropdown-item">
                    Mission
                  </Link>
                  <Link to="/about#our-vision" className="dropdown-item">
                    Vision
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <NavLink to="/activity" className={`nav-link${isEventsProgramsActive ? " active" : ""}`}>
                  Events & Programs
                </NavLink>
                <button
                  className={`nav-link dropdown-toggle dropdown-link-toggle${isEventsProgramsActive ? " active" : ""}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Toggle Events & Programs menu"
                ></button>
                <div className="dropdown-menu m-0 rounded-0">
                  <Link to="/activity#azkar-gathering" className="dropdown-item">
                    Azkar Gathering
                  </Link>
                  <Link to="/activity#ramadan-lectures" className="dropdown-item">
                    Ramadan Lectures
                  </Link>
                  <Link to="/activity#ramadan-iftar" className="dropdown-item">
                    Ramadan Iftar
                  </Link>
                  <Link to="/activity#student-assistance-ramadan" className="dropdown-item">
                    Assistance to Nigerian International Students in Nova Scotia during Ramadan
                  </Link>
                  <Link to="/activity#eid-il-adha-celebration" className="dropdown-item">
                    Eid-Il-Adha Celebration
                  </Link>
                </div>
              </div>
              <NavLink to="/woman" className={navClass}>
                Woman Wing
              </NavLink>
              <NavLink to="/youth" className={navClass}>
                Youth Wing
              </NavLink>
              {/* <div className="nav-item dropdown">
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
              </div> */}
              <NavLink to="/gallery" className={navClass}>
                Gallery
              </NavLink>
              <NavLink to="/contact" className={navClass}>
                Contact
              </NavLink>
            </div>
            <button
              type="button"
              className="btn btn-primary hero-donate-btn d-none d-xl-inline-block"
              onClick={() => setShowDonatePopup(true)}
            >
              Donate Now
            </button>
          </div>
        </nav>
      </div>
      {showDonatePopup ? (
        <>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Donation Information</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setShowDonatePopup(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="mb-0">
                    You are encouraged to donate by sending fund through email money transfer to
                    {" "}
                    isnnsummah@gmail.com.
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={() => setShowDonatePopup(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      ) : null}
    </div>
  );
}
