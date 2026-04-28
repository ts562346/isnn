import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showDonatePopup, setShowDonatePopup] = useState(false);

  return (
    <div className="container-fluid footer pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-7">
            <h1 className="text-light mb-0">Subscribe our newsletter</h1>
            <p className="text-secondary">Get the latest news and other tips</p>
          </div>
          <div className="col-lg-5">
            <div className="position-relative mx-auto">
              <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                Subcribe
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="border-top border-secondary"></div>
          </div>
        </div>
        <div className="row g-4 footer-inner">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">ISNNS<span className="text-primary">Ummah</span></h4>
              <p className="mb-4 text-secondary">
                We are Nigerians in Nova Scotia committed to preserving and propagating Islam while nurturing future generations upon 
                authentic Islamic values.
              </p>
              <a href="" className="btn btn-primary py-2 px-4">
                Donate Now
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Our Mosque</h4>
              <div className="d-flex flex-column">
                <h6 className="text-secondary mb-0">Our Address</h6>
                <div className="d-flex align-items-center border-bottom py-4">
                  <span className="flex-shrink-0 btn-square bg-primary me-3 p-4">
                    <i className="fa fa-map-marker-alt text-dark"></i>
                  </span>
                  <a href="" className="text-body">
                    71 Fleetview Dr, Halifax, NS
                  </a>
                </div>
                <h6 className="text-secondary mt-4 mb-0">Our Mobile</h6>
                <div className="d-flex align-items-center py-4">
                  <span className="flex-shrink-0 btn-square bg-primary me-3 p-4">
                    <i className="fa fa-phone-alt text-dark"></i>
                  </span>
                  <a href="" className="text-body">
                    +1 902 579 6177
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
                  <i className="fa fa-check text-primary me-2"></i>About
                </Link>
                <Link className="text-body mb-2" to="/activity">
                  <i className="fa fa-check text-primary me-2"></i>Events & Programs
                </Link>
                <Link className="text-body mb-2" to="/woman">
                  <i className="fa fa-check text-primary me-2"></i>Woman Wing
                </Link>
                <Link className="text-body mb-2" to="/youth">
                  <i className="fa fa-check text-primary me-2"></i>Youth Wing
                </Link>
                <Link className="text-body mb-2" to="/gallery">
                  <i className="fa fa-check text-primary me-2"></i>Gallery
                </Link>
                <Link className="text-body mb-2" to="/contact">
                  <i className="fa fa-check text-primary me-2"></i>Contact
                </Link>
                <button
                  type="button"
                  className="text-body mb-2 btn p-0 text-start border-0"
                  onClick={() => setShowDonatePopup(true)}
                >
                  <i className="fa fa-check text-primary me-2"></i>Donation
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Community Groups</h4>
              <div className="d-flex border-bottom border-secondary py-4">
                <img src="img/blog-mini-1.jpg" className="img-fluid flex-shrink-0" alt="" />
                <div className="ps-3">
                  <p className="mb-0 text-muted">Woman Wing</p>
                  <Link to="/woman" className="text-body">Programs and activities for women in our community.</Link>
                </div>
              </div>
              <div className="d-flex py-4">
                <img src="img/blog-mini-2.jpg" className="img-fluid flex-shrink-0" alt="" />
                <div className="ps-3">
                  <p className="mb-0 text-muted">Youth Wing</p>
                  <Link to="/youth" className="text-body">Programs designed to support and engage youth.</Link>
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
            &copy; <a className="border-bottom" href="#">ISNNS Ummah</a>, All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            {/*/*** This template is free as long as you keep the below author's credit link/attribution link/backlink. ***/}
            {/*/*** If you'd like to use the template without the below author's credit link/attribution link/backlink, ***/}
            {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". ***/}
            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
          </div>
        </div>
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
                    You are encouraged to donate by sending fund through email money transfer to{" "}
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
