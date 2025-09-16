import { Link } from "react-router-dom";

function LoginButton() {
    const token = localStorage.getItem("access");

    return (
        <Link to={token ? "/profile" : "/login"} className="button">
            {token ? "Profile" : "Login"}
        </Link>
    );
}

export default LoginButton;
