import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header-name">
            <img src="https://img.freepik.com/premium-vector/line-art-logos-camping-hill-outdoor-with-mountain-camp-fire-badge-logo_144543-867.jpg?w=740" alt="Logo" className="header-logo" />
            <h1>National Park Tracker</h1>

            <div style={{ marginBottom: "1rem" }}>
                <Link to="/">
                    <button className="loginbtn-hp">Log In</button>
                </Link>
            </div>

        </header>
    );
}

export default Header;