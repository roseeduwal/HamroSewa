import { Link } from "react-router-dom";
import Iconify from "../../components/iconify";

export default function CartDetails({ cartItems }) {
  return (
    <div className="shadow rounded bg-white p-4">
      <p className="fw-bold fs-2">Cart</p>
      <div></div>
      {cartItems?.data?.cartItems?.length > 0 ? (
        <div>
          <div>
            {cartItems?.data?.cartItems?.map((product) => {
              return (
                <div
                  key={product.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="fw-bold" style={{ flex: 1 }}>
                    {product?.product?.productName}
                  </div>
                  <div style={{ flex: 1, textAlign: "center" }}>
                    {product?.quantity}
                  </div>
                  <div style={{ flex: 1, textAlign: "center" }}>
                    Rs.{+product?.product?.productPrice * product?.quantity}
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/checkout" className="btn btn-primary w-100 mt-3">
            View Cart
          </Link>
        </div>
      ) : (
        <>
          <div className="p-4 d-flex justify-content-center ">
            <Iconify icon="bi:cart" width={100} />
          </div>
          <p className="fw-bold text-center">No Items In Your Cart </p>
        </>
      )}
    </div>
  );
}
