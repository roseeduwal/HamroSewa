export default function MyReviewsView() {
  return (
    <div className="col-9 bg-white changeuser p-4">
      <p className="fw-bold fs-3 p-2">My Reviews</p>
      <div className="boxx p-4">
        <div className="greyshawdow p-2 container-fluid">
          <p className="fw-bold ">Plumbing</p>
          <img
            className=""
            src="../images/plumbing4.jpg"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <div className="mt-3 d-flex justify-content-between ">
          <div>
            <i className="ph-fill ph-star"></i>
            <i className="ph-fill ph-star"></i>
            <i className="ph-fill ph-star"></i>
            <i className="ph-fill ph-star"></i>
            <i className="ph ph-star"></i>
          </div>
          <button type="submit" className="btn edit text-white">
            Edit
          </button>
        </div>
        <p>It is a very good services i like it ,less time consuming</p>
      </div>
      <div className="boxx p-4 mt-4">
        <div className="greyshawdow p-2 container-fluid">
          <p className="fw-bold ">Plumbing</p>
          <img
            className=""
            src="../images/plumbing4.jpg"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <div className="mt-3 d-flex justify-content-between ">
          <div>
            <i className="ph-fill ph-star"></i>
            <i className="ph-fill ph-star"></i>
            <i className="ph-fill ph-star"></i>
            <i className="ph-fill ph-star"></i>
            <i className="ph ph-star"></i>
          </div>
          <button type="submit" className="btn edit text-white">
            Edit
          </button>
        </div>
        <p>It is a very good services i like it ,less time consuming</p>
      </div>
    </div>
  );
}
