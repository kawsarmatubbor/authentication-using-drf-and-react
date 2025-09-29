import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {
    const { access, logout } = useContext(AuthContext);
    return (
        <header className="header">
            <Link to="/" className="logo">
                LOGO
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            {access ? (
                <div className="button-wrapper">
                    <Link to="/profile" className="button">
                        Profile
                    </Link>
                    <button onClick={logout} className="button secondary">
                        Logout
                    </button>
                </div>
            ) : (
                <Link to="/login" className="button">
                    Login
                </Link>
            )}
        </header>
    );
}

export default Header;
