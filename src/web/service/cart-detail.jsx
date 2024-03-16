import { Link } from "react-router-dom";
import Iconify from "../../components/iconify";

export default function CartDetails({ cartItems }) {
  return (
    <div className="shadow rounded bg-white p-4">
      <p className="fw-bold fs-2">Cart</p>

      {cartItems?.data?.cartItems?.length > 0 ? (
        <div>
          <div className="d-flex align-items-center justify-content-between">
            {cartItems?.data?.cartItems?.map((product) => {
              return (
                <>
                  <div className="fw-bold">{product?.product?.productName}</div>
                  <div>{product?.quantity}</div>
                  <div>
                    Rs.{+product?.product?.productPrice * product?.quantity}
                  </div>
                </>
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
            <Iconify icon="bi:cart" width={150} />
          </div>
          <p className="fw-bold text-center">No Items In Your Cart </p>
        </>
      )}
    </div>
  );
}
