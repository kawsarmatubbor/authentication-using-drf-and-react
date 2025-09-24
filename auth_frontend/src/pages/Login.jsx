import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [formData, setFormData] = useState({
        phone_number: "",
        password: "",
    });

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        setFormData({ phone_number: "", password: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
        handleReset();
    };

    return (
        <div className="container ">
            <div className="login-container-wrapper">
                <div className="login-container">
                    <h1 className="container-title">Welcome Back:)</h1>
                    <form className="login-form" onSubmit={handleSubmit}>
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
                        <button type="submit" className="button">
                            Login
                        </button>
                        <p>
                            Haven't any account?
                            <Link to="/registration"> Register </Link>
                            here.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
