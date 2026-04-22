import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid footer pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-7">
            <h1 className="text-light mb-0">Support ISNNS Programs</h1>
            <p className="text-secondary">Monthly contribution via email transfer: isnnsummah@gmail.com</p>
          </div>
          <div className="col-lg-5">
            <div className="position-relative mx-auto">
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your name (optional)"
              />
              <a
                href="mailto:isnnsummah@gmail.com?subject=ISNNS%20Monthly%20Contribution"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Donate
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="border-top border-secondary"></div>
          </div>
        </div>
        <div className="row g-4 footer-inner">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">
                <img
                  src="/img/isnns-logo.png"
                  alt="ISNNS logo"
                  style={{ height: "42px", width: "42px", objectFit: "contain" }}
                  className="me-2"
                />
                ISNNS <span className="text-primary">Ummah</span>
              </h4>
              <p className="mb-4 text-secondary">
                We are Nigerians residing in Nova Scotia committed to preserving and propagating
                Islam through community programs, learning, and support for future generations.
              </p>
              <a
                href="mailto:isnnsummah@gmail.com?subject=ISNNS%20Monthly%20Contribution"
                className="btn btn-primary py-2 px-4"
              >
                Donate Now
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Contact Us</h4>
              <div className="d-flex flex-column">
                <h6 className="text-secondary mb-0">Email</h6>
                <div className="d-flex align-items-center border-bottom py-4">
                  <span className="flex-shrink-0 btn-square bg-primary me-3 p-4">
                    <i className="fa fa-envelope text-dark"></i>
                  </span>
                  <a href="mailto:isnnsummah@gmail.com" className="text-body">
                    isnnsummah@gmail.com
                  </a>
                </div>
                <h6 className="text-secondary mt-4 mb-0">Social</h6>
                <div className="d-flex align-items-center py-4">
                  <span className="flex-shrink-0 btn-square bg-primary me-3 p-4">
                    <i className="fa fa-share-alt text-dark"></i>
                  </span>
                  <a href="#" className="text-body">
                    Facebook, Instagram, YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Explore Link</h4>
              <div className="d-flex flex-column align-items-start">
                <Link className="text-body mb-2" to="/">
                  <i className="fa fa-check text-primary me-2"></i>Home
                </Link>
                <Link className="text-body mb-2" to="/about">
                  <i className="fa fa-check text-primary me-2"></i>About Us
                </Link>
                <Link className="text-body mb-2" to="/activity">
                  <i className="fa fa-check text-primary me-2"></i>Programs
                </Link>
                <Link className="text-body mb-2" to="/contact">
                  <i className="fa fa-check text-primary me-2"></i>Contact us
                </Link>
                <Link className="text-body mb-2" to="/event">
                  <i className="fa fa-check text-primary me-2"></i>Our Events
                </Link>
                <a className="text-body mb-2" href="#">
                  <i className="fa fa-check text-primary me-2"></i>Women Wing
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="fa fa-check text-primary me-2"></i>Youth Wing
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Mosques in NS</h4>
              <div className="d-flex border-bottom border-secondary py-4">
                <div className="ps-3">
                  <a href="https://www.ummahmasjid.ca/" className="text-body">Ummah Masjid</a>
                  <p className="mb-0 text-muted">www.ummahmasjid.ca</p>
                </div>
              </div>
              <div className="d-flex py-4">
                <div className="ps-3">
                  <a href="https://www.cidonline.ca/" className="text-body">Centre for Islamic Development</a>
                  <p className="mb-0 text-muted">www.cidonline.ca</p>
                </div>
              </div>
              <div className="d-flex border-top border-secondary py-4">
                <div className="ps-3">
                  <a href="https://unitedmuslimsofhalifax.ca/" className="text-body">Albarka</a>
                  <p className="mb-0 text-muted">unitedmuslimsofhalifax.ca</p>
                </div>
              </div>
              <div className="d-flex border-top border-secondary py-4">
                <div className="ps-3">
                  <a href="https://nsicc.ca/" className="text-body">NISCC (Kearney Lake)</a>
                  <p className="mb-0 text-muted">nsicc.ca</p>
                </div>
              </div>
              <div className="d-flex border-top border-secondary py-4">
                <div className="ps-3">
                  <a href="https://sabeelcenter.ca/" className="text-body">Sabeel Mosque / IANS</a>
                  <p className="mb-0 text-muted">sabeelcenter.ca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="border-top border-secondary pb-4"></div>
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a className="border-bottom" href="#">ISNNS</a>, All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            Islamic Society of Nigerians in Nova Scotia
          </div>
        </div>
      </div>
    </div>
  );
}
