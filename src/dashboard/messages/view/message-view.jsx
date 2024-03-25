import Loader from "../../../components/loader";
import TableRow from "../../../components/table-row";
import { useFetchContactQuery } from "../../../hooks/useContact";

export default function MessageView() {
  const { data: messages, isLoading } = useFetchContactQuery();

  if (isLoading) return <Loader />;
  return (
    <div className="mt-4 rounded shadow p-4">
      <h3 className="">Message</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {messages?.data.map((message, index) => (
            <TableRow
              id={message.id}
              key={index}
              edit={false}
              // handleDelete={deleteCategory}
            >
              <th scope="row">{index + 1}</th>
              <td>{message?.fullName}</td>
              <td>{message?.email}</td>
              <td>{message?.message}</td>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
