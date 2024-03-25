import Loader from "../../../components/loader";
import TableRow from "../../../components/table-row";
import { useFetchPaymentQuery } from "../../../hooks/usePayment";

export default function PaymentView() {
  const { data: payments, isLoading } = useFetchPaymentQuery();

  if (isLoading) return <Loader />;
  return (
    <div className="mt-4 rounded shadow p-4">
      <h3 className="">Payments</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Payment Mode</th>
            <th scope="col">Payment Status</th>
            <th scope="col">User</th>
            <th scope="col">Booking Date</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {payments?.data.map((payment, index) => (
            <TableRow
              id={payment.id}
              key={index}
              edit={false}
              // handleDelete={deleteCategory}
            >
              <th scope="row">{index + 1}</th>
              <td>{payment?.paymentMode}</td>
              <td>{payment?.paymentStatus}</td>
              <td>{`${payment?.user?.firstName ?? ""} ${
                payment?.user?.lastName ?? ""
              }`}</td>
              <td>{payment?.booking?.bookingDate}</td>
              <td>{+payment?.priceInCents / 100}.00</td>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
