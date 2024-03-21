import { useCallback, useState } from "react";
import LoadingButton from "../../../components/loading-button";
import { useAddCategoryMutation } from "../../../hooks/useCategory";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function CategoryAddEditForm() {
  const [categoryDetail, setCategoryDetail] = useState({
    categoryName: "",
  });

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSuccess = useCallback(() => {
    enqueueSnackbar("Category add successful", { variant: "success" });
    navigate("/dashboard/categories");
  }, [enqueueSnackbar, navigate]);

  const onError = useCallback(
    (error) => {
      enqueueSnackbar(
        Array.isArray(error?.response?.data?.message)
          ? error?.response?.data?.message[0]
          : error?.response?.data?.message,
        { variant: "error" }
      );
    },
    [enqueueSnackbar]
  );

  const { mutate: addCategory, isLoading } = useAddCategoryMutation(
    onSuccess,
    onError
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addCategory(categoryDetail);
    },
    [addCategory, categoryDetail]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setCategoryDetail((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          onChange={handleChange}
          value={categoryDetail.categoryName}
          name="categoryName"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <LoadingButton
        isLoading={isLoading}
        type="submit"
        style="btn btn-primary w-100 mt-3"
      >
        Add Product
      </LoadingButton>
    </form>
  );
}
