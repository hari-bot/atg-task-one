import "./banner.css";
const Banner = (isLoggedIn) => {
  return (
    <div className="position-relative mb-6 banner-image">
      <div className="container d-flex justify-content-between align-items-center pt-3">
        <div className="d-flex align-items-center d-sm-block d-md-none">
          <i className="bi bi-arrow-left text-white fs-4 me-3"></i>{" "}
        </div>
        <button className="btn btn-outline-light btn-sm d-sm-block d-md-none ">
          {isLoggedIn ? "Join Group" : "Sign In"}
        </button>
      </div>

      <div className="container h-100 d-flex align-items-end pb-3">
        <div className="carousel-caption text-start text-white">
          <h1>Computer Engineering</h1>
          <p className="opacity-75">142,756 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
