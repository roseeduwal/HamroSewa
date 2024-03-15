import Iconify from "../../../components/iconify";
import Loader from "../../../components/loader";
import { useFetchCategoryQuery } from "../../../hooks/useCategory";

export default function CategoryView() {
  const { data: categories, isLoading } = useFetchCategoryQuery();
  if (isLoading) return <Loader />;
  return (
    <div className="col-9 bg-white changeuser p-4">
      <h3 className="">Professionals</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Name</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories?.data.map((category, index) => (
            <tr key={category.id}>
              <th scope="row">{index + 1}</th>
              <td>{category.categoryName}</td>
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
