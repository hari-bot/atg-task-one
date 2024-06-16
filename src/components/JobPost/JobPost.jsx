const JobPost = () => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h3 className="card-title">💼️ Job</h3>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="card-subtitle mb-2">Software Developer</h4>
          <div className="dropdown">
            <button
              className="btn btn-link"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 28 28"
              >
                <path
                  d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2833 16.3333 23.3333 15.2833 23.3333 14C23.3333 12.7166 22.2833 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3333 14C16.3333 12.7166 15.2833 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2833 16.3333 16.3333 15.2833 16.3333 14ZM9.33333 14C9.33333 12.7166 8.28333 11.6666 7 11.6666C5.71666 11.6666 4.66666 12.7166 4.66666 14C4.66666 15.2833 5.71666 16.3333 7 16.3333C8.28333 16.3333 9.33333 15.2833 9.33333 14Z"
                  fill="black"
                />
              </svg>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <button className="dropdown-item" type="button">
                  Edit
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Report
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Option 3
                </button>
              </li>
            </ul>
          </div>
        </div>
        <p className="d-flex gap-5">
          <span>
            <i className="bi bi-briefcase-fill"></i>Innovaccer Analytics Private
            Ltd
          </span>
          <span>
            <i className="bi bi-geo-alt-fill"></i>Ahmedabad, India
          </span>
        </p>
        <div className="text-center border py-2 rounded fw-bold text-success hover">
          Apply on TimesJob
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              src="https://dont-copy.netlify.app/assets/siddrath-t0piMZRc.jpg"
              width="48"
              height="48"
              alt="Profile"
            />
            <div>
              <div className="fw-bold">Siddharth Goyal</div>
              <div className="text-muted d-lg-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                    fill="#525252"
                  />
                </svg>
                <span>1.4k views</span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="text-muted d-sm-none d-none d-lg-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                  fill="#525252"
                />
              </svg>
              <span>1.4k views</span>
            </div>
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                  fill="#2D2D2D"
                />
              </svg>
              <span className=" d-sm-none d-none d-lg-block">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
