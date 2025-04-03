import { Link } from "react-router-dom"; 


const HomePage = () => {
    return (
      <div>
        <h1>Welcome to the Homepage!</h1>
        <p>Click below to go to the login page:</p>
        <Link to="/login">
            <button>Log In</button>  {/* This is the button that directs to the Login page */}
        </Link>
      </div>
    );
  };
  
  export default HomePage;