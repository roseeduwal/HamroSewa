import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card";

export default function ProductList({ id, serviceName, data, home }) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mt-4 ">
        <div className="fs-1 fw-bold ms-4">{serviceName}</div>
        {!home && (
          <Link to={`/service/${id}`} className="me-4">
            View All
          </Link>
        )}
      </div>

      <div className="container-fluid mt-3">
        <div className="row mt-4">
          {home
            ? data
                ?.slice(0, 4)
                ?.map((data, index) => (
                  <ProductCard
                    key={index}
                    description={data.productDescription}
                    image={data.productImageUrl}
                    name={data.productName}
                    price={data.productPrice}
                    home={home}
                  />
                ))
            : data?.map((data, index) => (
                <ProductCard
                  key={index}
                  description={data.productDescription}
                  image={data.productImageUrl}
                  name={data.productName}
                  price={data.productPrice}
                  home={home}
                />
              ))}
        </div>
      </div>
    </>
  );
}
