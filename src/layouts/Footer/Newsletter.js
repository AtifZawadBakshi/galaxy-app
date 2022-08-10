import React from "react";

const Newsletter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 w-100 d-flex justify-content-start align-items-center">
          <div className="display-table">
            <div className="display-table-cell footer-newsletter">
              <div className="section-header text-center">
                <label className="h2">
                  <span>sign up for </span>newsletter
                </label>
              </div>
              <form action="#" method="post">
                <div className="input-group">
                  <input
                    type="email"
                    className="input-group__field newsletter__input"
                    name="EMAIL"
                    placeholder="Email address"
                    required
                  />
                  <span className="input-group__btn">
                    <button
                      type="submit"
                      className="btn newsletter__submit"
                      name="commit"
                      id="Subscribe"
                    >
                      <span className="newsletter__submit-text--large">
                        Subscribe
                      </span>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 d-flex justify-content-end align-items-center">
          <div className="footer-social">
            <ul className="list--inline site-footer__social-icons social-icons">
              <li>
                <a
                  className="social-icons__link"
                  href="#"
                  target="_blank"
                  title="Belle Multipurpose Bootstrap 4 Template on Facebook"
                >
                  <i className="icon icon-facebook" />
                </a>
              </li>
              <li>
                <a
                  className="social-icons__link"
                  href="#"
                  target="_blank"
                  title="Belle Multipurpose Bootstrap 4 Template on Twitter"
                >
                  <i className="icon icon-twitter" />{" "}
                  <span className="icon__fallback-text">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  className="social-icons__link"
                  href="#"
                  target="_blank"
                  title="Belle Multipurpose Bootstrap 4 Template on Pinterest"
                >
                  <i className="icon icon-pinterest" />{" "}
                  <span className="icon__fallback-text">Pinterest</span>
                </a>
              </li>
              <li>
                <a
                  className="social-icons__link"
                  href="#"
                  target="_blank"
                  title="Belle Multipurpose Bootstrap 4 Template on Instagram"
                >
                  <i className="icon icon-instagram" />{" "}
                  <span className="icon__fallback-text">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  className="social-icons__link"
                  href="#"
                  target="_blank"
                  title="Belle Multipurpose Bootstrap 4 Template on Tumblr"
                >
                  <i className="icon icon-tumblr-alt" />{" "}
                  <span className="icon__fallback-text">Tumblr</span>
                </a>
              </li>
              <li>
                <a
                  className="social-icons__link"
                  href="#"
                  target="_blank"
                  title="Belle Multipurpose Bootstrap 4 Template on YouTube"
                >
                  <i className="icon icon-youtube" />{" "}
                  <span className="icon__fallback-text">YouTube</span>
                </a>
              </li>
              <li>
                <a
                  className="social-icons__link"
                  href="#"
                  target="_blank"
                  title="Belle Multipurpose Bootstrap 4 Template on Vimeo"
                >
                  <i className="icon icon-vimeo-alt" />{" "}
                  <span className="icon__fallback-text">Vimeo</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
