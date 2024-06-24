import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ContentNavigation from "./components/ContentNavigation/ContentNavigation";
import Post from "./components/Post/Post";
import Location from "./components/Location/Location";
import Reccomended from "./components/Reccomended/Reccomended";
import { posts } from "./components/data";
import MeetupPost from "./components/MeetupPost/MeetupPost";
import JobPost from "./components/JobPost/JobPost";
import LoginPage from "./components/LoginPage/LoginPage";
import { useState, useEffect } from "react";
import MobileButton from "./components/MobileButton/MobileButton";

const App = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [isLoggedIn, setIsLogin] = useState(false);
  const toggleShowLogin = () => setShowLoginPage(!showLoginPage);

  useEffect(() => {
    if (showLoginPage) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showLoginPage]);
  return (
    <>
      {showLoginPage && (
        <LoginPage toggleShowLogin={toggleShowLogin} handleLogin={setIsLogin} />
      )}
      <Navbar toggleShowLogin={toggleShowLogin} isLoggedIn={isLoggedIn} />
      <Banner isLoggedIn={isLoggedIn} />
      <ContentNavigation isLoggedIn={isLoggedIn} />

      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-8">
            {posts.map((post, index) => (
              <Post
                key={index}
                image={post.image}
                heading={post.heading}
                type={post.type}
                content={post.content}
                profileImage={post.profileImage}
                profileName={post.profileName}
              />
            ))}
            <MeetupPost />
            <JobPost />
          </div>

          <div className="col-md-12 col-xl-4">
            <div className="p-3">
              <div>
                <Location />
                {isLoggedIn && <Reccomended />}
              </div>
            </div>
          </div>
        </div>
        <MobileButton />
      </div>
    </>
  );
};

export default App;
