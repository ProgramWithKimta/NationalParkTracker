// HomePage.tsx
import { Link } from "react-router-dom";
import "../homepage.css";
import CommentForm from "../components/commentform";
import DisplayComment from "../components/displaycomment";

function HomePage() {
  return (
    <>
      <div className="homepage">
        {/* Search bar, photo of park, park info, comment div, comment box form */}
      </div>
      <div>
        <Link to="/login">
          <button>Log In</button>  {/* This button directs to the Login page */}
        </Link>
      </div>
      <CommentForm />
      <DisplayComment />
    </>
  );
}

export default HomePage;
