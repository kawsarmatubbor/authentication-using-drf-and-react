import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Profile() {
    const [profile, setProfile] = useState(null);

    const { access } = useContext(AuthContext);

    const getProfileData = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
            headers: {
                Authorization: `Bearer ${access}`,
            },
        });
        setProfile(response.data);
    };

    useEffect(() => {
        if (access) {
            getProfileData();
        }
    }, [access]);

    return (
        <div className="container">
            {profile && (
                <h1 className="container-title">
                    Welcome Mr. {profile.phone_number}
                </h1>
            )}
        </div>
    );
}

export default Profile;
