import React from "react";

const Accordion = () => {
  return (
    <section className="course-modules">
      <div className="container-fluid py-5 bg-teal">
        <div className="accordion-container mx-auto">
          <header className="text-center">
            <h2 className="text-white mb-2">Browse course modules</h2>
            <div className="divider mb-4"></div>
          </header>
          <div id="accordion">
            <article className="card">
              <div className="card-header" id="headingOne">
                <h3 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    1. Preparedness
                  </button>
                </h3>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Synopsis for Preparedness module.
                </div>
              </div>
            </article>
            <article className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    2. Response
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  20 word synopsis to go here explaining exactly what this
                  module is about. More useful as I now know what this is.
                </div>
              </div>
            </article>
            <article className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    3. Recovery
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  20 word synopsis to go here explaining exactly what this
                  module is about. More useful as I now know what this is.
                </div>
              </div>
            </article>
            <article className="card">
              <div className="card-header" id="headingFour">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    4. Mitigation
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div className="card-body">
                  20 word synopsis to go here explaining exactly what this
                  module is about. More useful as I now know what this is.
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
