import "./ContentNavigation.css";

const ContentNavigation = ({ isLoggedIn }) => {
  return (
    <div className="container my-4">
      {/* For Big Screens */}
      <div className="d-none d-md-flex justify-content-between align-items-center border-bottom">
        <nav className="nav nav-tabs">
          <div className="nav-item active">All Post(32)</div>
          <div className="nav-item">Article</div>
          <div className="nav-item">Event</div>
          <div className="nav-item">Education</div>
          <div className="nav-item">Job</div>
        </nav>
        <div className="d-flex">
          <button className="btn btn-light dropdown-toggle me-2 fw-bold">
            Add Post
          </button>
          {!isLoggedIn ? (
            <button className="btn btn-primary">
              <i className="bi bi-person-plus-fill"></i>
              <span> Join Group</span>
            </button>
          ) : (
            <button className="btn btn-secondary">
              <i className="bi bi-box-arrow-left"></i>
              <span> Leave Group</span>
            </button>
          )}
        </div>
      </div>

      {/* For Mobile */}
      <div className="d-block d-md-none">
        <div className="d-flex justify-content-between">
          <p className="fw-bold">Bold text.</p>
          <button className="btn btn-light dropdown-toggle me-2">
            Filter All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentNavigation;
