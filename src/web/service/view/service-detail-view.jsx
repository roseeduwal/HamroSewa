export default function ServiceDetailView() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row mt-4 d-flex justify-content-between">
          <div className="col-3">
            <p className="mt-4 fw-bold fs-2">Cleaning Service </p>
            <div className="d-flex align-items-center">
              <i className="ph ph-star"></i>
              <p className="fs-4 mb-0">4.5(30 Bookings)</p>
            </div>
          </div>
          <div className="col-9 slider imageslider">
            <img
              src="../images/cleanslider.webp"
              className="w-100 h-100"
              alt="..."
            />
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="../images/cleanslider3.jpg"
                    className=""
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img src="../images/cleaning4.png" className=" " alt="..." />
                </div>
                <div className="carousel-item">
                  <img
                    src="../images/cleanslider2.webp"
                    className=""
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row ">
          <div className="col-8 bg-white mt-3">
            <p className="fw-bold fs-3 mt-3">Service</p>

            <div className="mt-3 margin">
              <p className="fw-bold fs-5">Full Home Cleaning</p>
              <div className="d-flex align-items-center">
                <i className="ph ph-star"></i>
                <p className="">4.5(30 Bookings)</p>
              </div>
              <p className="text-danger fw-bold">Starts at Rs.2999</p>
              <p>
                {" "}
                We use eco-friendly, high-quality cleaning products to ensure a
                safe and effective home cleaning experience. Our meticulous
                step-by-step process guarantees a thorough and lasting
                cleanliness, leaving your home in impeccable condition.
              </p>
              <a className="ratebutton mb-3" href="#" role="link">
                Rate
              </a>
            </div>

            <div className="mt-4 margin">
              <p className="fw-bold fs-5">Tank Cleaning</p>
              <div className="d-flex align-items-center">
                <i className="ph ph-star"></i>
                <p className="fs-4">4.5(30 Bookings)</p>
              </div>
              <p className="text-danger fw-bold">Starts at Rs.2999</p>
              <p>
                For an in-depth and effective process, we use top-tier tank
                cleaning materials. Our systematic processes guarantee the
                elimination of impurities, restoring your tank to its ideal
                state.
              </p>
              <a className="ratebutton mb-3" href="#" role="link">
                Rate
              </a>
            </div>

            <div className="mt-4 margin">
              <p className="fw-bold fs-5">Glass Cleaning</p>
              <div className="d-flex align-items-center">
                <i className="ph ph-star"></i>
                <p className="fs-4">4.5(30 Bookings)</p>
              </div>
              <p className="text-danger fw-bold">Starts at Rs.2999</p>

              <p>
                We use high-quality glass cleaning chemicals to achieve flawless
                shine. Our process includes careful cleaning and polishing
                procedures that leave your glass surfaces spotless and shining.
              </p>
              <a className="ratebutton mb-3" href="#" role="link">
                Rate
              </a>
            </div>

            <div className="mt-4">
              <p className="fw-bold fs-5">General Pest Control</p>
              <div className="d-flex align-items-center">
                <i className="ph ph-star"></i>
                <p className="fs-4">4.5(30 Bookings)</p>
              </div>
              <p className="text-danger fw-bold">Starts at Rs.2999</p>

              <p>
                {
                  "We use efficient pest control methods to get rid of ants,cockroaches, and other unwanted pests. Our focused strategy involves careful examination, precise application, and guaranteeing a pest-free environment for your comfort."
                }
              </p>
              <a className="ratebutton mb-3" href="#" role="link">
                Rate
              </a>
            </div>
          </div>

          <div className=" col-4 bg-white mt-3 cartcolumn  ">
            <div className="p-4 d-flex justify-content-center ">
              <i className="ph ph-shopping-cart fa-6x "></i>
            </div>
            <p className="fw-bold text-center">No Items In Your Cart </p>

            <div className="row">
              <div className="bg-white d-flex justify-content-around cartdown">
                <div className="">
                  <i className="ph ph-seal-check fa-2x"></i>
                </div>
                <div>
                  <p className="fw-bold">Verified professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
