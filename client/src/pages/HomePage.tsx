import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../homepage.css";
import ParkData from "../components/parkdata";
import CommentSection from "../components/parentcomment";


const HomePage: React.FC = () => {
  const location = useLocation();
  // const username = location.state?.username;
  const username = location.state?.username;

  return (
    <div className="homepage">
      {username && <h2>Hi! {username}</h2>}

      <div style={{ marginBottom: "1rem" }}>
        <Link to="/">
          <button>Log In</button>
        </Link>
      </div>
      
      <ParkData />
      <CommentSection />
    </div>
  );
};

export default HomePage;
