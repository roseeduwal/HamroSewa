export default function ProductCard({ name, price, image }) {
  return (
    <div className="col-lg-3">
      <div className="card border-0 shadow ">
        <img
          className="card-img-top"
          src={image}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          {/* <p className="card-text">{description}</p> */}
          <div className="text-primary">Rs. {price}</div>
        </div>
      </div>
    </div>
  );
}
