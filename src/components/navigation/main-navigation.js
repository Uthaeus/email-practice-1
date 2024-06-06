import { NavLink, useNavigate } from "react-router-dom";

export default function MainNavigation() {

    const navigate = useNavigate();

    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <p onClick={() => navigate("/")}>logo here</p>
            </div>

            <div className="main-navigation-right">
                <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"}>Home</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"}>Contact</NavLink>
            </div>
        </div>
    );
}