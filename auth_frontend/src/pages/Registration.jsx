import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
    const [formData, setFormData] = useState({
        phone_number: "",
        first_name: "",
        last_name: "",
        address: "",
        password: "",
        password_2: "",
    });
    const navigation = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        setFormData({
            phone_number: "",
            first_name: "",
            last_name: "",
            address: "",
            password: "",
            password_2: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            "http://127.0.0.1:8000/api/registration/",
            formData
        );
        handleReset();
        navigation("/login");
    };

    return (
        <div className="container">
            <div className="registration-container-wrapper">
                <div className="registration-container">
                    <h1 className="container-title">Registration</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="phone_number">
                            <label htmlFor="phone_number">Phone Number</label>
                            <input
                                type="number"
                                name="phone_number"
                                id="phone_number"
                                required
                                onChange={handleChange}
                                value={formData.phone_number}
                            />
                        </div>
                        <div className="first_name">
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                required
                                onChange={handleChange}
                                value={formData.first_name}
                            />
                        </div>
                        <div className="last_name">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                required
                                onChange={handleChange}
                                value={formData.last_name}
                            />
                        </div>
                        <div className="address">
                            <label htmlFor="address">Address</label>
                            <textarea
                                name="address"
                                id="address"
                                col="30"
                                rows="5"
                                onChange={handleChange}
                                value={formData.address}
                            ></textarea>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Conform Password</label>
                            <input
                                type="password"
                                name="password_2"
                                id="password_2"
                                required
                                onChange={handleChange}
                                value={formData.password_2}
                            />
                        </div>
                        <button type="submit" className="button">
                            Register
                        </button>
                        <p>
                            Already have an account?
                            <Link to="/Login"> Login </Link>
                            here.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;
