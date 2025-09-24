import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [access, setAccess] = useState(null);

    const navigation = useNavigate();

    const login = async (formData) => {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/login/",
            formData
        );

        const { access, refresh } = response.data;
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        setAccess(access);
        navigation("/dashboard");
    };

    const logout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setAccess(null);
        navigation("/login");
    };
    return (
        <AuthContext.Provider value={{ access, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
