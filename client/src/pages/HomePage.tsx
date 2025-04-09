import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../homepage.css";
import ParkData from "../components/parkdata";
import CommentForm from "../components/commentform";
import DisplayComment from "../components/displaycomment";
// import SearchBar from "../components/searchbar";

const HomePage: React.FC = () => {
  // Get passed state from navigation. For example, after logging in
  // you might pass { username: "JohnDoe" }.
  const location = useLocation();
  const username = location.state?.username;

  return (
    <div className="homepage">
      {username ? (
        <h2>Hi! {username}</h2>
      ) : (
        // If not logged in, show the "Log In" button.
        <div style={{ marginBottom: "1rem" }}>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      )}

     {/* <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
        searchHistory={searchHistory}
      /> */}
      <ParkData />
      <CommentForm />
      <DisplayComment />
    </div>
  );
};

export default HomePage;



// import React from "react"; commenting out by Hoa 
// import "../homepage.css";
// import ParkData from "../components/parkdata"; // Import the ParkData component
// import CommentForm from "../components/commentform";
// import DisplayComment from "../components/displaycomment";
// import SearchBar from "../components/searchbar";

// const HomePage: React.FC = () => {
//   return (
//     <div>
//       <ParkData />
//       <CommentForm />
//       <DisplayComment />
//     </div>
//   );
// };

// export default HomePage;
