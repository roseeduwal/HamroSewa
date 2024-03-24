import { useCallback, useState } from "react";
import Iconify from "./iconify";
import LoadingButton from "./loading-button";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useAddReviewMutation } from "../hooks/useReview";

const ReviewModal = ({ showModal, handleClose, productId }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSuccess = useCallback(() => {
    enqueueSnackbar("User logged in successfully", { variant: "success" });

    navigate("/dashboard/profile");
  }, [enqueueSnackbar, navigate]);

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

  const { mutate: addReview } = useAddReviewMutation(onSuccess, onError);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addReview({ productId, review, rating: rating });
    },
    [addReview, productId, review, rating]
  );
  return (
    <>
      {showModal && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "100vh",
            width: "100vw",
            position: "absolute",
            zIndex: 1,
            left: "0%",
            top: "0%",
            backgroundColor: "rgba(64, 61, 61,.5)",
          }}
          //   onClick={handleClose}
        >
          <div className="modal-overlay rounded bg-white p-4 shadow">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span
                style={{ cursor: "pointer" }}
                className="close-button"
                onClick={handleClose}
              >
                ×
              </span>
              <h6>Write a review</h6>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              {[1, 2, 3, 4, 5].map((item) =>
                item > rating ? (
                  <div onClick={() => setRating(item)} key={item}>
                    <Iconify
                      style={{ cursor: "pointer" }}
                      icon="iconoir:star"
                    />
                  </div>
                ) : (
                  <div onClick={() => setRating(item)} key={item}>
                    <Iconify
                      style={{ cursor: "pointer" }}
                      icon="fluent-emoji-flat:star"
                    />
                  </div>
                )
              )}
            </div>

            <div>
              <p>Review</p>
              <form onSubmit={handleSubmit}>
                <textarea
                  style={{ width: "100%" }}
                  name="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <LoadingButton type="submit" style="btn btn-primary w-100 mt-3">
                  Submit
                </LoadingButton>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewModal;
