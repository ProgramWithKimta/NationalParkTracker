import "../login.css";
import { useNavigate } from "react-router-dom";

const LogIn= () =>{
    const navigate = useNavigate();
    const handleLogin = () => {

        //login api call
        navigate('/HomePage');

    };
    return <>

    <div className="login-form">

        <label htmlFor="username"><h2>Username</h2></label> 
        <input
            type="text"
            id="username" />
        <br></br>

        <label htmlFor="password"><h2>Password</h2></label> 
        <input
            type="text"
            id="username" />

        <br></br>

        <button onClick={handleLogin} className="login-btn" type="submit">Log In</button>

    </div>

    </>
}


// function LogIn () {
//     return <div></div>
// }

// export default LogIn;

// import LoginForm from "../components/loginform";

// const LogIn = () => {
//     return (
//         <div>
//             <h1>Log In</h1>
//             <LoginForm />
//         </div>
//     );
// };

export default LogIn;
