import "./Reccomended.css";

const Reccomended = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
        <i className="bi bi-hand-thumbs-up-fill"></i>
        <div className="fw-bold  text-center">Recommended Groups</div>
      </div>
      <div className="d-flex flex-column gap-4">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src="https://dont-copy.netlify.app/assets/recGroup4-cA6Wedko.jpg"
              width="36"
              height="36"
            />
            <div className="text-wrapper">Leisure</div>
          </div>
          <a className="btn followed rounded-5" href="/">
            Followed
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src="https://dont-copy.netlify.app/assets/recGroup2-A2R6AKaI.jpg"
              width="36"
              height="36"
            />
            <div className="text-wrapper">Activism</div>
          </div>
          <a className="btn follow rounded-5" href="/">
            Follow
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src="https://dont-copy.netlify.app/assets/recGroup3-AxHGDmNo.jpg"
              width="36"
              height="36"
            />
            <div className="text-wrapper">MBA</div>
          </div>
          <a className="btn follow rounded-5" href="/">
            Follow
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src="https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg"
              width="36"
              height="36"
            />
            <div className="text-wrapper">Philosophy</div>
          </div>
          <a className="btn follow rounded-5" href="/">
            Follow
          </a>
        </div>
      </div>
      <button className="btn text-end mt-5 text-primary text-capitalize">
        see more...
      </button>
    </>
  );
};

export default Reccomended;
