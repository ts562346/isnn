export default function Footer() {
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
                    123 Street, New York, USA
                  </a>
                </div>
                <h6 className="text-secondary mt-4 mb-0">Our Mobile</h6>
                <div className="d-flex align-items-center py-4">
                  <span className="flex-shrink-0 btn-square bg-primary me-3 p-4">
                    <i className="fa fa-phone-alt text-dark"></i>
                  </span>
                  <a href="" className="text-body">
                    +012 345 67890
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Explore Link</h4>
              <div className="d-flex flex-column align-items-start">
                <a className="text-body mb-2" href="">
                  <i className="fa fa-check text-primary me-2"></i>Home
                </a>
                <a className="text-body mb-2" href="">
                  <i className="fa fa-check text-primary me-2"></i>About
                </a>
                <a className="text-body mb-2" href="">
                  <i className="fa fa-check text-primary me-2"></i>Events & Programs
                </a>
                <a className="text-body mb-2" href="">
                  <i className="fa fa-check text-primary me-2"></i>Woman
                </a>
                <a className="text-body mb-2" href="">
                  <i className="fa fa-check text-primary me-2"></i>Youth
                </a>
                <a className="text-body mb-2" href="">
                  <i className="fa fa-check text-primary me-2"></i>Gallery
                </a>
                <a className="text-body mb-2" href="">
                  <i className="fa fa-check text-primary me-2"></i>Contact
                </a>
                <a className="text-body mb-2" href="">
                  <i className="fa fa-check text-primary me-2"></i>Donation
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Latest Post</h4>
              <div className="d-flex border-bottom border-secondary py-4">
                <img src="img/blog-mini-1.jpg" className="img-fluid flex-shrink-0" alt="" />
                <div className="ps-3">
                  <p className="mb-0 text-muted">01 Jan 2045</p>
                  <a href="" className="text-body">Lorem ipsum dolor sit amet elit eros vel</a>
                </div>
              </div>
              <div className="d-flex py-4">
                <img src="img/blog-mini-2.jpg" className="img-fluid flex-shrink-0" alt="" />
                <div className="ps-3">
                  <p className="mb-0 text-muted">01 Jan 2045</p>
                  <a href="" className="text-body">Lorem ipsum dolor sit amet elit eros vel</a>
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
    </div>
  );
}
