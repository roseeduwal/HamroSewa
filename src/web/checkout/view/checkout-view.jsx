import { useCallback, useState } from "react";
import Loader from "../../../components/loader";
import LoadingButton from "../../../components/loading-button";
import { useFetchCartItemQuery } from "../../../hooks/useCartItem";
import { useBookingMutation } from "../../../hooks/useBooking";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function CheckoutView() {
  const [bookingDate, setBookingDate] = useState();
  const { data: cartItems, isLoading } = useFetchCartItemQuery();

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSuccess = useCallback(() => {
    enqueueSnackbar("Service add successful", { variant: "success" });
    navigate("/dashboard/services");
  }, [enqueueSnackbar, navigate]);

  const onError = useCallback(
    (error) => {
      error;
      enqueueSnackbar(
        error?.response?.data?.message[0] ?? "Something went wrong",
        { variant: "error" }
      );
    },
    [enqueueSnackbar]
  );
  const { mutate: addBooking, isLoading: booking } = useBookingMutation(
    onSuccess,
    onError
  );
  const handleBooking = useCallback(() => {
    ("sp");
    const bookingItems = cartItems?.data?.cartItems?.map((item) => ({
      quantity: item.quantity,
      price: item.totalPrice,
      productId: item.product.id,
    }));
    addBooking({
      subTotal: cartItems.data.subTotal,
      bookingDate,
      bookingItems,
    });
  }, [addBooking, cartItems, bookingDate]);

  bookingDate;

  if (isLoading) return <Loader />;
  return (
    <div
      style={{ width: "50%", margin: "auto" }}
      className="bg-white  mt-4 p-4 rounded shadow container-fluid"
    >
      <p className="fw-bold fs-2 text-center ">Checkout</p>
      <h3>Summary</h3>
      {cartItems?.data?.cartItems?.map((product, index) => (
        <div key={index} className="items p-4 d-flex justify-content-between">
          <div className="">
            <p>{product?.product?.productName}</p>
            <p>Rs. {product.product.productPrice}</p>
          </div>

          <div className="wrapper">
            <span className="num">{product.quantity}</span>
          </div>

          <div className="fw-bold">
            <p>Rs. {product.totalPrice}</p>
          </div>
        </div>
      ))}

      <div className="row">
        <div className=" col-8 bill mt-4 p-4">
          <p className="fw-bold">Payment Summary</p>
          <div className="d-flex justify-content-between">
            <div className="">
              <p>Item Total</p>
            </div>
            <p>Rs. {cartItems.data.subTotal}</p>
          </div>
          <div className="d-flex justify-content-between total">
            <div className="">
              <p>Total Discount</p>
            </div>
            <p>- Rs. 0</p>
          </div>
          <div className="d-flex justify-content-between mt-3 ">
            <div className="">
              <p>Grand Total</p>
            </div>
            <p>Rs. {cartItems.data.subTotal}</p>
          </div>
        </div>

        <div className=" col-4 mt-4 p-4 BookD ">
          <p className="fs-4 text-center">Book Your Date</p>
          <div htmlFor="bookingDate" className="d-flex justify-content-center">
            <input
              onChange={(e) => setBookingDate(e.target.value)}
              value={bookingDate}
              type="date"
              name="bookingDate"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <LoadingButton
          isLoading={booking}
          onClick={handleBooking}
          style="btn btn-primary w-100 mt-3"
        >
          Book Now
        </LoadingButton>
      </div>
    </div>
  );
}
