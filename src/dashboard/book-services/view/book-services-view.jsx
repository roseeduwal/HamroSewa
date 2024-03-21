import Loader from "../../../components/loader";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useFetchBookingQuery } from "../../../hooks/useBooking";

export default function BookServicesView() {
  const { user } = useAuthContext();

  const { data: bookings, isLoading } = useFetchBookingQuery(user.role);

  if (isLoading) return <Loader />;
  return (
    <div className="mt-4 rounded shadow p-4">
      <p className="fw-bold fs-3 p-2">Book Services</p>

      {bookings.data.map((booking, index) => (
        <div key={index} className="boxx p-4 d-flex justify-content-between">
          <div className="">
            {booking.bookingItems.map((item) => (
              <p key={item.id}>{item?.product?.productName}</p>
            ))}
            <p>Ordered Time:{booking.bookingDate}</p>
          </div>

          <div className="boxxx">
            <p>Total Services:{booking.bookingItems.length} </p>
            <p>Payment Method:Online</p>
            <p>Total Amount:Rs {booking.subTotal}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
