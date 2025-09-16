import { useNavigate } from "react-router-dom";

function LogoutButton() {
    const navigate = useNavigate();
    const token = localStorage.getItem("access");

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        navigate("/");
    };

    return (
        <>
            {token && (
                <button className="button secondary" onClick={handleLogout}>
                    Logout
                </button>
            )}
        </>
    );
}

export default LogoutButton;
