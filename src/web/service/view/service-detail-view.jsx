import { useParams } from "react-router-dom";
import { useFetchCategoryDetailQuery } from "../../../hooks/useCategory";
import Loader from "../../../components/loader";
import Iconify from "../../../components/iconify";
import ServiceDetailCard from "../service-detail-card";
import CartDetails from "../cart-detail";
import { useFetchCartItemQuery } from "../../../hooks/useCartItem";

export default function ServiceDetailView() {
  const { id } = useParams();
  id;
  const { data: category, isLoading } = useFetchCategoryDetailQuery(id);
  const { data: cartItems } = useFetchCartItemQuery();
  if (isLoading) return <Loader />;
  return (
    <main>
      <div className="container-fluid">
        <div className="row mt-4 d-flex justify-content-between">
          <div className="col-3">
            <p className="mt-4 fw-bold fs-2">{category.data.categoryName}</p>
            <div className="d-flex align-items-center">
              <i className="ph ph-star"></i>
              <p className="fs-4 mb-0">
                {category.data.rating}({category.data.bookings} Bookings)
              </p>
            </div>
          </div>
          <div className="col-9 slider imageslider">
            {/* <img
              src="../images/cleanslider.webp"
              className="w-100 h-100"
              alt="..."
            /> */}
            {/* <div id="carouselExampleIndicators" className="carousel slide">
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
            </div> */}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row ">
          <div className="col-8 ">
            <div className="bg-white shadow rounded mt-3 p-4">
              <p className="fw-bold fs-3 mt-3">Services</p>

              {category?.data?.products.map((product, index) => (
                <>
                  <ServiceDetailCard
                    cartItems={cartItems}
                    key={index}
                    product={product}
                  />
                  {category?.data?.products.length > 1 && <hr />}
                </>
              ))}
            </div>
          </div>

          <div className=" col-4 mt-3 cartcolumn  ">
            <CartDetails cartItems={cartItems} />
            <div className="row bg-white shadow rounded mt-4">
              <div
                className="p-3 scrollbar"
                style={{ height: "200px", overflow: "auto" }}
              >
                <p className="fw-bold fs-2 m-0">Reviews</p>
                {category?.data?.products.map((product, index) => (
                  <div key={index}>
                    <div>{product.productName}:</div>
                    <div style={{ marginLeft: "20px" }}>
                      {product.reviews.map((review) => (
                        <div
                          className="d-flex align-items-center"
                          key={review.id}
                        >
                          ({" "}
                          <Iconify
                            marginRight="5px"
                            padding="0"
                            icon="fluent-emoji-flat:star"
                          />
                          <div>{review.rating}.0</div>)
                          <div>{review.review}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="row bg-white shadow rounded mt-4">
              <div className=" d-flex align-items-center cartdown">
                <div className="">
                  <Iconify icon="bitcoin-icons:verify-outline" width={40} />
                </div>
                <div>
                  <p className="fw-bold m-0">Verified Professionals</p>
                </div>
              </div>
              <div className="d-flex align-items-center cartdown">
                <div className="">
                  <Iconify icon="bitcoin-icons:verify-outline" width={40} />
                </div>
                <div>
                  <p className="fw-bold m-0">Safe Chemicals</p>
                </div>
              </div>
              <div className="d-flex align-items-center cartdown">
                <div className="">
                  <Iconify icon="bitcoin-icons:verify-outline" width={40} />
                </div>
                <div>
                  <p className="fw-bold m-0">A Flawless Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
