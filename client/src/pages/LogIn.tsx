import Header from "../components/header";
import Footer from "../components/footer";

function LogIn () {
    return <>
    <Header />
    <div className="login-form">

        <label htmlFor="username">Username</label> 
        <input
            type="text"
            id="username" />
        <br></br>

        <label htmlFor="password">Password</label> 
        <input
            type="text"
            id="username" />

        <br></br>

        <button className="login-btn" type="submit">Log In</button>

    </div>

    <Footer />

    </>
}

export default LogIn;