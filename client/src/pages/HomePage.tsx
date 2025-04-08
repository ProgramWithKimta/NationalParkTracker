import React from "react";
import "../homepage.css";
import ParkData from "../components/parkdata"; // Import the ParkData component
import CommentForm from "../components/commentform";
import DisplayComment from "../components/displaycomment";
import SearchBar from "../components/searchbar";

const HomePage: React.FC = () => {
  return (
    <div>
      <ParkData />
      <CommentForm />
      <DisplayComment />
    </div>
  );
};

export default HomePage;
