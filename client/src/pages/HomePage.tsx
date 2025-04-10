import React from "react";
import { useLocation } from "react-router-dom";
import "../homepage.css";
import ParkData from "../components/parkdata";
import CommentSection from "../components/parentcomment";


const HomePage: React.FC = () => {
  const location = useLocation();
  // const username = location.state?.username;
  const username = location.state?.username;

  return (
    <div className="homepage">
      {username && <h2 style={{ marginLeft:"20px" }}>Hi {username}</h2>}
      <br></br>
      <ParkData />
      <CommentSection />
    </div>
  );
};

export default HomePage;
