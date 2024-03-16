import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useAddCartItemMutation } from "../../hooks/useCartItem";
import { useQueryClient } from "react-query";

export default function ServiceDetailCard({ product, cartItems }) {
  const [amount, setAmount] = useState(0);
  const queryClient = useQueryClient();

  const { isLoggedIn } = useAuthContext();

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSuccess = useCallback(() => {
    enqueueSnackbar("User logged in successfully", { variant: "success" });
    queryClient.invalidateQueries("cart-item");
  }, [enqueueSnackbar, queryClient]);

  const onError = useCallback(
    (error) => {
      error;
      enqueueSnackbar(
        error?.response?.data?.message ?? "Something went wrong",
        { variant: "error" }
      );
    },
    [enqueueSnackbar]
  );

  const { mutate: addToCart } = useAddCartItemMutation(onSuccess, onError);

  const handleAddToCart = useCallback(
    (quantity) => {
      addToCart({
        productId: product.id,
        quantity,
      });
    },
    [addToCart, product]
  );

  useEffect(() => {
    if (!isLoggedIn) {
      setAmount(0);
      return;
    }
    const quantity = cartItems?.data?.cartItems?.find(
      (cartItem) => cartItem.productId === product.id
    ).quantity;
    setAmount(quantity);
  }, [cartItems, product.id, isLoggedIn]);
  return (
    <>
      <>
        <div className="d-flex justify-content-between">
          <div className="mt-3">
            <p className="fw-bold fs-5">{product.productName}</p>
            <div className="d-flex align-items-center">
              <i className="ph ph-star"></i>
              <p className="">4.5(30 Bookings)</p>
            </div>
            <p className="text-danger fw-bold">
              Starts at Rs.{product.productPrice}
            </p>
            <p> {product.productDescription}</p>
            <a className="ratebutton mb-3" href="#" role="link">
              Rate
            </a>
          </div>
          <div className="">
            <img className="d-block" src={product.productImageUrl} alt="" />
            <div className="d-flex align-items-center  justify-content-center">
              <div
                className="mr-4 d-flex align-items-center justify-content-between"
                style={{ marginRight: "10px" }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (!isLoggedIn) {
                      navigate("/login");
                      enqueueSnackbar("Please login first", {
                        variant: "error",
                      });
                      return;
                    }
                    if (amount <= 0) {
                      enqueueSnackbar("Cannot be less than 0", {
                        variant: "error",
                      });
                      return;
                    }
                    setAmount((preVal) => preVal - 1);
                    handleAddToCart(amount + 1);
                  }}
                >
                  -
                </div>
                <div
                  className="border border-secondary rounded"
                  style={{ margin: "0 10px", padding: "1px 10px" }}
                >
                  {amount}
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (!isLoggedIn) {
                      navigate("/login");
                      enqueueSnackbar("Please login first", {
                        variant: "error",
                      });
                      return;
                    }
                    if (amount >= 3) {
                      enqueueSnackbar("Cannot add more", { variant: "error" });
                      return;
                    }
                    setAmount((preVal) => preVal + 1);
                    handleAddToCart(amount + 1);
                  }}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
