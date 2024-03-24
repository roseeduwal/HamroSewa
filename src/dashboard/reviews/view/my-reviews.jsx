import Iconify from "../../../components/iconify";
import Loader from "../../../components/loader";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useFetchBookingQuery } from "../../../hooks/useReview";

export default function MyReviewsView() {
  const { user } = useAuthContext();

  const { data: reviews, isLoading } = useFetchBookingQuery(user.role);

  if (isLoading) return <Loader />;
  return (
    <div className="mt-4 shadow rounded p-4">
      <p className="fw-bold fs-3 p-2">My Reviews</p>
      {reviews.data.map((review) => (
        <div key={review.id} className="boxx p-4">
          <div className="greyshawdow p-2 container-fluid">
            <p className="fw-bold ">{review.product.productName}</p>
            <img
              className=""
              src={review.product.productImageUrl}
              style={{ height: "100px", width: "100px" }}
            />
          </div>
          <div className="mt-3 d-flex justify-content-between ">
            <div className="d-flex justify-content-start align-items-center">
              {[1, 2, 3, 4, 5].map((item) =>
                item > review.rating ? (
                  <div key={item}>
                    <Iconify icon="iconoir:star" />
                  </div>
                ) : (
                  <div key={item}>
                    <Iconify icon="fluent-emoji-flat:star" />
                  </div>
                )
              )}
            </div>
            <button type="submit" className="btn edit text-white">
              Edit
            </button>
          </div>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
}
