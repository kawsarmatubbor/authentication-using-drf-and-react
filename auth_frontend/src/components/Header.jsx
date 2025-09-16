import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                LOGO
            </Link>
            <ul className="main-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="#">About</Link>
                </li>
                <li>
                    <Link to="/registration">Registration</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <div className="button-wrapper">
                <LogoutButton />
                <LoginButton />
            </div>
        </header>
    );
}

export default Header;
