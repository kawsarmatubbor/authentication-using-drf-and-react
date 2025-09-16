import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

export default App;
