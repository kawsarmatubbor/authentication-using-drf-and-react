import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    const getProfile = async () => {
        const token = localStorage.getItem("access");
        if (!token) {
            navigate("/login");
            return;
        }
        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setProfile(response.data);
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className="container">
            {profile && (
                <h1 className="container-title">
                    WELCOME {profile.first_name} {profile.last_name}
                </h1>
            )}
        </div>
    );
}

export default Profile;
