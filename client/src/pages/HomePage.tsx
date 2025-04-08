import React from "react";
import "../homepage.css";
import ParkData from "../components/parkdata"; // Import the ParkData component
import CommentForm from "../components/commentform";
import DisplayComment from "../components/displaycomment";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the National Park Tracker</h1>
      <ParkData />
      <CommentForm />
      <DisplayComment />
    </div>
  );
};

export default HomePage;