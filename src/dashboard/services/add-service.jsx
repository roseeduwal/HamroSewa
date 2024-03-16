import { useCallback, useState } from "react";
import LoadingButton from "../../components/loading-button";
import { useFetchCategoryQuery } from "../../hooks/useCategory";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useAddServiceMutation } from "../../hooks/useService";

export default function AddService() {
  const [productDetail, setProductDetail] = useState({
    productName: "",
    productDescription: "",
    categoryId: 0,
    productPrice: "",
  });
  const [productImage, setProductImage] = useState("");
  const [preview, setPreview] = useState("");

  const { data: categories } = useFetchCategoryQuery();

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

  const { mutate: addProductMutation } = useAddServiceMutation(
    onSuccess,
    onError
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setProductDetail((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("productName", productDetail.productName);
      formData.append("productDescription", productDetail.productDescription);
      formData.append("productPrice", productDetail.productPrice);
      formData.append("productImage", productImage);
      formData.append("categoryId", productDetail.categoryId);
      addProductMutation(formData);
    },
    [productImage, productDetail, addProductMutation]
  );

  return (
    <div className="col-9 bg-white shadow rounded p-4">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="">Add Services</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="bg-white">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={productDetail.productName}
              name="productName"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              onChange={handleChange}
              value={productDetail.productPrice}
              name="productPrice"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="exampleFormControlTextarea1">
              Product Description
            </label>
            <textarea
              name="productDescription"
              value={productDetail.productDescription}
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputnumber1" className="form-label">
              Services
            </label>
            <select
              onChange={handleChange}
              name="categoryId"
              className="form-select"
              aria-label="Default select example"
            >
              <option>Select One</option>
              {categories?.data?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Image
            </label>
            <input
              onChange={(e) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setPreview(reader.result);
                };
                reader.readAsDataURL(e.target.files[0]);

                setProductImage(e.target.files[0]);
              }}
              className="form-control"
              type="file"
              id="formFile"
            />
            {preview && (
              <img
                src={preview}
                style={{
                  height: "500px",
                  width: "500px",
                  flexGrow: "1",
                  objectFit: "contain",
                }}
              />
            )}
          </div>

          <LoadingButton type="submit" style="btn btn-primary w-100 mt-3">
            Add Product
          </LoadingButton>
        </form>
      </div>
    </div>
  );
}
