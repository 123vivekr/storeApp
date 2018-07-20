import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div id="intro">
      <section id="showcase" className="py-5">
        <div className="primary-overlay text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block text-center">
                <h1 className="display-3 mt-5 pt-5">
                  Welcome to Nice Restaurant
                </h1>
                <p className="lead text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores est et excepturi libero minima neque provident
                  veritatis voluptas voluptatum. Aliquid aperiam at commodi
                  dolores exercitationem id itaque iusto, labore minus,
                  molestiae molestias nihil officia officiis omnis possimus
                  tenetur unde, voluptatibus!
                </p>
                <a
                  href=""
                  className="btn btn-outline-secondary btn-lg text-white"
                >
                  <i className="fa fa-arrow-right" /> Read More
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card bg-dark">
                  <div className="card-header">
                    <h2 className="text-white text-center">Start shopping</h2>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter the Mobile Number"
                      />
                    </div>
                  </div>
                  <div className="card-footer">
                    <input
                      type="button"
                      className="btn btn-lg btn-primary btn-block"
                      value="Send OTP"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
