import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [form, setForm] = useState({
        phone_number: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        setForm({
            phone_number: "",
            password: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            "http://127.0.0.1:8000/api/login/",
            form
        );
        handleReset();

        const { access, refresh } = response.data;

        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);

        navigate("/profile");
    };

    return (
        <div className="container login">
            <h1 className="container-title">LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div className="phone-number">
                    <label htmlFor="phone_number">Phone number</label>
                    <input
                        type="number"
                        name="phone_number"
                        id="phone_number"
                        placeholder="01*********"
                        value={form.phone_number}
                        onChange={handleChange}
                    />
                </div>

                <div className="password-1">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="button-wrapper">
                    <button
                        type="reset"
                        className="button secondary"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
