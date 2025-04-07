import { Link } from "react-router-dom"; 
import "../homepage.css";
import CommentForm from "../components/commentform";
import DisplayComment from "../components/displaycomment";

function HomePage () {
    return <>
    <div className="homepage">the search bar, photo of park, park info, comment div, comment box form goes here</div>
    <div>
      <Link to="/login">
        <button>Log In</button>  {/* This is the button that directs to the Login page */}
      </Link>
    </div>
    <CommentForm />
    <DisplayComment />
    </>
}


// const HomePage = () => {
//     return (
//       <div>
//         <h1>Welcome to the Homepage!</h1>
//         <p>Click below to go to the login page:</p>
        
//       </div>
//     );
//   };
  
  export default HomePage;