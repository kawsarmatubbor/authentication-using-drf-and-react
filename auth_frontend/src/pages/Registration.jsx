import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        address: "",
        password: "",
        password_2: "",
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
            first_name: "",
            last_name: "",
            phone_number: "",
            address: "",
            password: "",
            password_2: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            "http://127.0.0.1:8000/api/registration/",
            form
        );
        handleReset();
        navigate("/login");
    };

    return (
        <div className="container registration">
            <h1 className="container-title">REGISTRATION</h1>
            <form onSubmit={handleSubmit}>
                <div className="user">
                    <div className="first-name">
                        <label htmlFor="first_name">First name</label>
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            placeholder="First name"
                            value={form.first_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="last-name">
                        <label htmlFor="last_name">Last name</label>
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            placeholder="Last name"
                            value={form.last_name}
                            onChange={handleChange}
                        />
                    </div>
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
                </div>

                <div className="address">
                    <label htmlFor="address">Address</label>
                    <textarea
                        name="address"
                        id="address"
                        rows="5"
                        cols="30"
                        placeholder="Address"
                        value={form.address}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="password">
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
                    <div className="password-2">
                        <label htmlFor="password_2">Confirm password</label>
                        <input
                            type="password"
                            name="password_2"
                            id="password_2"
                            placeholder="Password"
                            value={form.password_2}
                            onChange={handleChange}
                        />
                    </div>
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

export default Registration;
