import { Link } from "react-router-dom";
import Iconify from "../../../components/iconify";
import Loader from "../../../components/loader";
import { useFetchServiceQuery } from "../../../hooks/useService";

export default function ServicesView() {
  const { data: services, isLoading } = useFetchServiceQuery();
  if (isLoading) return <Loader />;
  return (
    <div className="col-9 bg-white shadow rounded p-4">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="">Services</h3>
        <Link to="add-service" className="btn d-inline btn-primary">
          Add service
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {services?.data.map((service, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{service.productName}</td>
              <td>{service.category.categoryName}</td>
              <td>{service.productPrice}</td>
              <td>
                <img
                  src={service.productImageUrl}
                  style={{ height: "40px", width: "40px", flexGrow: "1" }}
                />
              </td>
              <td className="d-flex">
                <div style={{ cursor: "pointer", marginRight: "10px" }}>
                  <Iconify icon="ph:pencil" />
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Iconify icon="ph:trash" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
