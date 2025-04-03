import "../login.css";

function LogIn () {
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

        <button className="login-btn" type="submit">Log In</button>

    </div>

    </>
}

export default LogIn;