import "./Location.css";
const Location = () => {
  return (
    <div className="container d-none d-lg-flex flex-column mt-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <i className="bi bi-geo-alt"></i>
          <input
            type="text"
            placeholder="Enter Your Location"
            className="input-text location-input"
          />
        </div>
        <button className="btn">
          <i className="bi bi-pen-fill"></i>
        </button>
      </div>
      <div className="d-flex align-items-center justify-items-center gap-2 mb-4 text-muted">
        <i className="bi bi-info-circle"></i>
        <small className="location-info my-3">
          Your location will help us serve better and extend a personalized
          experience.
        </small>
      </div>
      <hr className="my-1" />
    </div>
  );
};

export default Location;
