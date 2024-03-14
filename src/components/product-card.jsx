export default function ProductCard({ name, description, price, image, home }) {
  return (
    <div className="col-lg-3">
      <div className="card">
        <img
          className="card-img-top"
          src={image}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{description}</p>
          {home && (
            <a href="#" className="btn btn-primary">
              Rs. {price}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
